"use strict"

//********************************
//*** Uso del operador this

const boton = document.querySelector('.boton');

/*
boton.addEventListener('click', function () {
    console.log(this.innerHTML);
})
*/

boton.addEventListener('click', () => {
    console.log(this)
    this.location = "https://www.facebook.com/sasha.tls";

})

// me da acceso a toda la ventana y sus funciones, con el this.location envio donde quiero haciendo el click