const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Ocurrio un error guardando', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizarRegistro = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB(listadoPorHacer);

    return porHacer;
}

const borrarRegistro = (descripcion) => {
    cargarDB();
    let nuevolistadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    if (nuevolistadoPorHacer.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevolistadoPorHacer;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizarRegistro,
    borrarRegistro
}