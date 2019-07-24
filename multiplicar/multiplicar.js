const fs = require('fs');

let contenido = "";


let crearArchivo = (base, limite) => {


    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            return reject("Error: La base o el límite ingresados no son número");

        }

        let ruta_archivo = `tablas/tabla-${base}.txt`;

        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${base*i}
`;
        }


        fs.writeFile(ruta_archivo, contenido, (err) => {

            if (err) {
                reject(err)
            } else {
                resolve(ruta_archivo);
            }


        });



    });

};

module.exports = {
    crearArchivo
};