
const fs = require('fs')

let listadoPorHacer = [];

const guardarDB = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoPorHacer)
        fs.writeFile('db/data.json', data, (err) => {
            if (err) reject(err)
            else {
                resolve('Completado')
            }
        })
    })
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('./../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }
    return listadoPorHacer
    
}


const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer = cargarDB()

    listadoPorHacer.push(porHacer);
    guardarDB().then(res => console.log(res)).catch(err => console.log(err))

    return porHacer;
}

const getListado = () => {
    listadoPorHacer = cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    listadoPorHacer = cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    }
    else{
        return false
    }

}

const borrar = (descripcion) => {
    listadoPorHacer = cargarDB();
    listadoPorHacer = listadoPorHacer.filter((item) => item.descripcion != descripcion)
    guardarDB()
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}