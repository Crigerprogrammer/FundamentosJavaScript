//Declaracion de Objetos en JS
var cristian = {
    nombre: 'Cristian',
    apellido: 'Hernandez',
    edad: 21
}

var darsi = {
    nombre: 'Darsi',
    apellido: 'Perreira',
    edad: 20
}

//Alcance de las funciones
function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase())
}

//Invocando funcion, mandando objetos como parametros
imprimirNombreEnMayusculas(cristian)
imprimirNombreEnMayusculas(darsi)
imprimirNombreEnMayusculas({nombre: 'Gerardo'})