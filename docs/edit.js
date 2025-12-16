const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1. CARPETA DONDE ESTÁN TUS FOTOS (Ajusta esto si es necesario)
const carpetaImagenes = './360'; 

fs.readdirSync(carpetaImagenes).forEach(archivo => {
    // Solo procesar JPG o PNG que no sean ya previews
    if ((archivo.endsWith('.jpg') || archivo.endsWith('.png') || archivo.endsWith('.jpeg')) && !archivo.includes('_preview')) {
        
        const rutaEntrada = path.join(carpetaImagenes, archivo);
        // Creamos el nombre nuevo: ej. "sala.jpg" -> "sala_preview.jpg"
        const nombreSalida = archivo.replace(/\.(jpg|jpeg|png)$/, '_preview.jpg');
        const rutaSalida = path.join(carpetaImagenes, nombreSalida);

        sharp(rutaEntrada)
            .resize(500) // Ancho de 500px (suficiente para preview borroso)
            .jpeg({ quality: 30 }) // Calidad baja para que pese < 50kb
            .toFile(rutaSalida)
            .then(() => console.log(`✅ Creado: ${nombreSalida}`))
            .catch(err => console.error(`❌ Error en ${archivo}:`, err));
    }
});