var cristian = {
    nombre: 'Cristian',
    edad: 21
}

//Definir constantes
const MAYORIA_DE_EDAD = 18

//Funcion Anonima, porque no tiene nombre, pero esta asignada a una variable con nombre
const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

//Arroy Function
const esMenorDeEdad = ({edad}) =>  edad <= MAYORIA_DE_EDAD

function permitirAcceso() {
    //Negar una condicion con !
    if(!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}