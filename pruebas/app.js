var express = require ('express')

var app = express ()

app.all( '/', function(peticion, respuesta){
    respuesta.send("Hola");
})

var server = app.listen(3000, function(){
    
})