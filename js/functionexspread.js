

// parámetros spread, los 3 puntos en "otros" reconoce la funcion rest, son necesarios

function cocinar(ingrediente1, ingrediente2, ingrediente3, ... otros){
    console.log('ingrediente1: ',ingrediente1)
    console.log('ingrediente2: ',ingrediente2)
    console.log('ingrediente3: ',ingrediente3)
    console.log('otros: ',otros)


}
var ingredientesBase = ["tomate" , "pollo" ];


cocinar(...ingredientesBase, "arroz", "pescado", "salchichas")