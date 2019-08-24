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
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

//Invocando funcion, mandando objetos como parametros
imprimirNombreEnMayusculas(cristian)
imprimirNombreEnMayusculas(darsi)
imprimirNombreEnMayusculas({nombre: 'Gerardo'})


//Reto. Realizar funcion que imprima nombre y apellido de objeto
function imprimirNombreCompleto(persona){
    console.log(persona.nombre + ' ' + persona.apellido)
}

imprimirNombreCompleto(cristian)


function cumpleaños(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

cumpleaños(cristian)