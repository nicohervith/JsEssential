"use strict"

function saludar(nombre, edad){
    console.log("Hola: ",nombre)
    console.log("edad: ",edad);
    var resultado = nombre + " tiene " + edad + " años";
    return resultado;
}

var mensaje = saludar("Nicolás", 23);
console.log(mensaje)