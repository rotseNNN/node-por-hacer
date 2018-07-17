const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const argv = require('yargs')
    .command('listar', 'Lista las tareas por hacer', opts)
    .command('crear', 'crea una tarea por hacer', opts)
    .command('actualizar', 'actualiza una tarea por hacer', opts)
    .command('borrar', 'borrar una tarea por hacer', opts)
    .help()
    .argv;

module.exports = {
    argv
}