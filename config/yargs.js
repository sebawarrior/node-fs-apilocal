
const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}

let argv = require('yargs')
.command('crear', 'Crear un elemento por hacer', 
{
    descripcion
})
.command('actualizar', 'Actualiza el estado completado de una tarea', 
{
    descripcion,
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
})
.command('borrar', 'Eliminar una tarea del todo', 
{
    descripcion
})
.help()
.argv;

module.exports = {
    argv
}