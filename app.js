const { crearArchivo } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');


// let comando = argv._.find(element=>element==='crear');

// switch(comando){
//   case 'crear':

//   break;

//   default:

//     break;
// }


let base = argv.base;
let limite = argv.limite;

// if (argv.find(elemento => elemento.match(/^(--base=)/))) {
//     parametro = argv.find(elemento => elemento.match(/^(--base=)/));
//     base = parametro.split("=")[1];
// } else if (argv.find(elemento => elemento.match(/^(--b=)/))) {
//     parametro = argv.find(elemento => elemento.match(/^(--b=)/));
//     base = parametro.split("=")[1];
// } else {
//     parametro = undefined;
//     base = parametro;
// }


crearArchivo(base, limite)
    .then(archivo => console.log("Archivo creado: " + archivo)).catch(err => { console.log(err); });