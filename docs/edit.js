const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1. CARPETA DONDE ESTÁN TUS FOTOS (Ajusta esto si es necesario)
const carpetaImagenes = './360'; 

(async () => {
    try {
        const archivos = await fs.promises.readdir(carpetaImagenes);
        const promesas = [];

        for (const archivo of archivos) {
            // Solo procesar JPG o PNG que no sean ya previews
            if ((archivo.endsWith('.jpg') || archivo.endsWith('.png') || archivo.endsWith('.jpeg')) && !archivo.includes('_preview')) {

                const rutaEntrada = path.join(carpetaImagenes, archivo);
                // Creamos el nombre nuevo: ej. "sala.jpg" -> "sala_preview.jpg"
                const nombreSalida = archivo.replace(/\.(jpg|jpeg|png)$/, '_preview.jpg');
                const rutaSalida = path.join(carpetaImagenes, nombreSalida);

                const promesa = sharp(rutaEntrada)
                    .resize(500) // Ancho de 500px (suficiente para preview borroso)
                    .jpeg({ quality: 30 }) // Calidad baja para que pese < 50kb
                    .toFile(rutaSalida)
                    .then(() => console.log(`✅ Creado: ${nombreSalida}`))
                    .catch(err => console.error(`❌ Error en ${archivo}:`, err));

                promesas.push(promesa);
            }
        }

        // Wait for all sharp processes to complete
        await Promise.all(promesas);
        console.log('🏁 Proceso finalizado.');
    } catch (error) {
        console.error('❌ Error leyendo la carpeta:', error);
    }
})();
