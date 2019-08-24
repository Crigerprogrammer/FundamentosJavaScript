var cristian = {
    nombre: 'Cristian',
    apellido: 'Hernandez',
    altura: 1.72
}

var darsi = {
    nombre: 'Darsi',
    apellido: 'Perreira',
    altura: 1.68
}

var ricardo = {
    nombre: 'Ricardo',
    apellido: 'Hernandez',
    altura: 1.74
}

var rodrigo = {
    nombre: 'Rodrigo',
    apellido: 'Hernandez',
    altura: 1.75
}

var angelica = {
    nombre: 'Angelica',
    apellido: 'Fuentes',
    altura: 1.50
}

var jessica = {
    nombre: 'Jessica',
    apellido: 'Aragon',
    altura: 1.60
}

const esAlta = persona =>  persona.altura > 1.7
const esBaja = persona => persona.altura < 1.7

//Arreglo
var personas = [cristian, darsi, ricardo, rodrigo, angelica, jessica]

//Filtrar arreglos
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)
