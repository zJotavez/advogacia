import fs from 'fs';
import path from 'path';

// Carregar jimp de forma robusta e dinâmica para suportar v0.x ou v1.x
let Jimp;
try {
    const jimpModule = await import('jimp');
    Jimp = jimpModule.Jimp || jimpModule.default || jimpModule;
} catch (e) {
    console.error("Erro ao carregar o Jimp:", e);
    process.exit(1);
}

const brainDir = "C:\\Users\\HP\\.gemini\\antigravity\\brain\\de5c4ec4-770d-4441-a5f6-5cb01d480b5d";
const publicDir = "C:\\Users\\HP\\Desktop\\Atigravity\\Modelo pra adaptar\\public";
const files = fs.readdirSync(brainDir).filter(f => f.startsWith('media__') && f.endsWith('.jpg'));

console.log("Arquivos para processar:", files);

async function main() {
    const imagesInfo = [];

    for (const f of files) {
        const fullPath = path.join(brainDir, f);
        const image = await Jimp.read(fullPath);
        const width = image.bitmap.width;
        const height = image.bitmap.height;
        const ratio = height / width;
        
        imagesInfo.push({
            filename: f,
            path: fullPath,
            image: image,
            width,
            height,
            ratio
        });
        
        console.log(`Imagem: ${f} | Dimensões: ${width}x${height} | Proporção (H/W): ${ratio.toFixed(3)}`);
    }

    // Identificar a foto de Wellem Dias (print do Instagram)
    const wellemInfo = imagesInfo.find(info => info.ratio > 1.6);
    const remainingInfos = imagesInfo.filter(info => info !== wellemInfo);
    
    let anaInfo, joaoInfo;
    
    if (remainingInfos.length === 2) {
        const [imgA, imgB] = remainingInfos;
        
        const getCornerBrightness = (img) => {
            let sum = 0;
            let count = 0;
            for (let x = 10; x < 30; x++) {
                for (let y = 10; y < 30; y++) {
                    const pixelColor = img.getPixelColor(x, y);
                    const r = (pixelColor >> 24) & 0xff;
                    const g = (pixelColor >> 16) & 0xff;
                    const b = (pixelColor >> 8) & 0xff;
                    const luma = 0.299 * r + 0.587 * g + 0.114 * b;
                    sum += luma;
                    count++;
                }
            }
            return sum / count;
        };

        const brightA = getCornerBrightness(imgA.image);
        const brightB = getCornerBrightness(imgB.image);
        
        console.log(`Luminosidade estimada - Imagem A (${imgA.filename}): ${brightA.toFixed(2)} | Imagem B (${imgB.filename}): ${brightB.toFixed(2)}`);
        
        if (brightA > brightB) {
            joaoInfo = imgA;
            anaInfo = imgB;
        } else {
            joaoInfo = imgB;
            anaInfo = imgA;
        }
    } else {
        console.error("Número inesperado de imagens de retrato!");
        return;
    }

    console.log(`\nIdentificação das fotos:`);
    console.log(`- Wellem Dias: ${wellemInfo?.filename}`);
    console.log(`- Ana Beatriz (fundo escuro): ${anaInfo?.filename}`);
    console.log(`- João Victor (fundo claro): ${joaoInfo?.filename}`);

    // Função auxiliar para chamar 'cover' de forma compatível
    const applyCover = (img, w, h) => {
        try {
            return img.cover({ w, h });
        } catch (e) {
            return img.cover(w, h);
        }
    };

    // Função auxiliar para chamar 'crop' de forma compatível
    const applyCrop = (img, x, y, w, h) => {
        try {
            return img.crop({ x, y, w, h });
        } catch (e) {
            return img.crop(x, y, w, h);
        }
    };

    // Função auxiliar para chamar 'composite' de forma compatível
    const applyComposite = (imgTarget, imgSrc, x, y) => {
        try {
            return imgTarget.composite({ src: imgSrc, x, y });
        } catch (e) {
            return imgTarget.composite(imgSrc, x, y);
        }
    };

    // 1. Processar e salvar a foto de Ana Beatriz
    if (anaInfo) {
        console.log("\nProcessando foto da Dra. Ana Beatriz...");
        const anaImg = anaInfo.image.clone();
        applyCover(anaImg, 800, 1000);
        await anaImg.write(path.join(publicDir, "ana_beatriz.jpg"));
        console.log("Salvo: public/ana_beatriz.jpg");
    }

    // 2. Processar e salvar a foto de João Victor
    if (joaoInfo) {
        console.log("\nProcessando foto do Dr. João Victor...");
        const joaoImg = joaoInfo.image.clone();
        applyCover(joaoImg, 800, 1000);
        await joaoImg.write(path.join(publicDir, "joao_victor.jpg"));
        console.log("Salvo: public/joao_victor.jpg");
    }

    // 3. Processar e salvar a foto de Wellem Dias (recorte do Instagram)
    if (wellemInfo) {
        console.log("\nProcessando foto da fundadora Wellem Dias...");
        const wellemImg = wellemInfo.image.clone();
        const w = wellemInfo.width;
        const h = wellemInfo.height;
        
        // No print do Instagram (472x1024), Y_inicio = 188px
        const yStart = Math.round(h * 0.183);
        const cropHeight = Math.min(w, h - yStart);
        
        console.log(`Recortando print do Instagram de (0, ${yStart}) com tamanho ${w}x${cropHeight}`);
        applyCrop(wellemImg, 0, yStart, w, cropHeight);
        applyCover(wellemImg, 800, 1000);
        
        await wellemImg.write(path.join(publicDir, "wellem_dias.jpg"));
        console.log("Salvo: public/wellem_dias.jpg");
        
        console.log("\nCriando foto de equipe unificada (colagem)...");
        let compositeImg;
        
        try {
            // Tentar criar com construtor objeto do Jimp v1
            compositeImg = new Jimp({ width: 1200, height: 600, color: 0x070B19ff });
        } catch (e) {
            try {
                // Tentar criar com Jimp.create objeto
                compositeImg = await Jimp.create({ width: 1200, height: 600, color: 0x070B19ff });
            } catch (e2) {
                // Tentar tradicional
                compositeImg = new Jimp(1200, 600, 0x070B19ff);
            }
        }
        
        const wellemCol = (await Jimp.read(path.join(publicDir, "wellem_dias.jpg"))).clone();
        applyCover(wellemCol, 400, 600);
        
        const anaCol = (await Jimp.read(path.join(publicDir, "ana_beatriz.jpg"))).clone();
        applyCover(anaCol, 400, 600);
        
        const joaoCol = (await Jimp.read(path.join(publicDir, "joao_victor.jpg"))).clone();
        applyCover(joaoCol, 400, 600);
        
        // Organizando a colagem: Ana Beatriz (Esquerda), Wellem Dias (Centro - Fundadora), João Victor (Direita)
        applyComposite(compositeImg, anaCol, 0, 0);
        applyComposite(compositeImg, wellemCol, 400, 0);
        applyComposite(compositeImg, joaoCol, 800, 0);
        
        await compositeImg.write(path.join(publicDir, "equipe.jpg"));
        console.log("Salvo colagem de equipe: public/equipe.jpg");
    }
}

main().catch(console.error);
