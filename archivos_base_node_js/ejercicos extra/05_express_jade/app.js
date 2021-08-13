var express = require('express');
var fs = require('fs');
var app = express();


app.use (express.static(__dirname + '/public') );

app.get('/' , function( peticion, respuesta){
    respuesta.render('index.jade');
 })


 app.listen( 3000 , function(){
     console.log("escuchando en el puerto 3000");
 })