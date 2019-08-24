//Creando objectos con class
class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var {nombre, apellido} = this
        console.log('Hola, me llamo ' + nombre + ' ' + apellido)
        if(fn){
            fn(nombre, apellido)
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

//Herencia con la palabra reservada extends
class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah, no sabía que eras desarrollador/a`)
    }
}


var cristian = new Desarrollador('Cristian', 'Hernandez', 1.72)
var darsi = new Persona('Darsi', 'Pereira', 1.8)

cristian.saludar(responderSaludo)
darsi.saludar()
