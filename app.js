const argv = require('./config/yargs').argv
const colors = require('colors')
const porHacer = require('./por-hacer/por-hacer')

let accion = argv._[0];

switch (accion) {
    case 'crear':
        console.log(argv.descripcion);
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        if (listado.count === 0) {
            console.log('NO EXISTEN REGISTROS PARA LISTAR'.red);
        } else {
            for (let tarea of listado) {
                console.log('===============Por Hacer=================='.green);
                console.log(tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('==========================================\n'.green);
            }
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizarRegistro(argv.descripcion, argv.completado);
        if (actualizar === false)
            console.log(`el registro ${argv.descripcion} no existe`.red);
        else
            console.log('registro actualizado');
        break;
    case 'borrar':
        console.log(argv.descripcion);
        let borrar = porHacer.borrarRegistro(argv.d);
        console.log(borrar);
        break;
    default:
        console.log('Comando no reconocido');
}