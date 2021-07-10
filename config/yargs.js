const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default:false,
                    describe: 'esta opcion es para si queremos que aparesca listada a tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'esta bandera nos dice hasta que numero va a ir la tabla'
                })
                .check( ( argv, options ) => {
                    if( isNaN( argv.base ) ){
                        throw 'la base debe ser un numero';
                    }

                    if( typeof argv.l !== 'boolean'){
                        throw 'la bandera listar debe ser un valor true o false';
                    }
                     
                    if( isNaN( argv.h ) ){
                        throw 'el hasta debe ser un numero';
                    }
                    return true;
                })
                .argv;



module.exports = argv;