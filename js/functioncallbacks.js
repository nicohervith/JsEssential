


function calcular(datoA,datoB,sumarCB){
    var suma = datoA + datoB
    var restar = datoA - datoB

    sumarCB(suma);
    restarCB(restar);


}

calcular(2,3,function(resultado) {
    console.log("suma: " ,resultado)

},function(resultado){
    console.log("resta: ",resultado)
})