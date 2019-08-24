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

//Arreglo
var personas = [cristian, darsi, ricardo, rodrigo, angelica, jessica]

//Recorrer arreglo
for(var i= 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}