//Creando objectos con class
class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log('Hola, me llamo ' + this.nombre + ' ' + this.apellido)
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

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}


var cristian = new Persona('Cristian', 'Hernandez', 1.72)
var darsi = new Persona('Darsi', 'Pereira', 1.8)

cristian.saludar()
cristian.soyAlto()