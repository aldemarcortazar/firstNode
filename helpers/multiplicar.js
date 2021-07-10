const fs = require('fs');
const colors = require('colors');
// const crearArchivo = ( base = 5 ) => {
//     return new Promise( ( resolve, reject ) => {
//         try {
//             console.log('========================');
//             console.log(`tabla del: ${base}`);
//             console.log('========================');

//             let salida = '';
//             const nameArchivo = `tabla-${base}.txt`;
//             for(let i = 1; i <= 10; i++  ){
//                 salida += `${base} x ${i} = ${base * i}\n`;
//             }

//             fs.writeFileSync(`${nameArchivo}`, salida);

//             console.log('todo creado con exito!!!!!!!!!');

//             return resolve( nameArchivo );
//         } catch (error) {
//            return reject(`no se pudo crear el archivo`);
//         } 
//     });

// }
const crearArchivo = async ( base = 5 , listar = false, hasta = 10) => {
    try{
        let salida = '';
        let consola = '';
        const nameArchivo = `./salida/tabla-${base}.txt`;
        for(let i = 1; i <= hasta; i++  ){
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base * i}\n`;
        }
        if( listar ){
            console.log('========================'.green);
            console.log('tabla del: '.green, colors.blue(base));
            console.log('========================'.green);
            console.log( consola );
        }

        fs.writeFileSync(nameArchivo, salida);
        return nameArchivo;
    } catch ( err){
        throw err;
    }
}

module.exports = {
    crearArchivo,
}