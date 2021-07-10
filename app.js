const { crearArchivo } = require('./helpers/multiplicar.js');
const colors = require('colors');
const argv = require('./config/yargs.js');

console.clear();


console.log(argv.b);

// const [ , , arg3] = process.argv;
// const [,base = 5] = arg3.split('=');

// // const base = 6;

crearArchivo(argv.base, argv.l, argv.h)
    .then( nameArchivo => console.log(nameArchivo.rainbow, 'creado') )
    .catch( err => console.error( err ) );