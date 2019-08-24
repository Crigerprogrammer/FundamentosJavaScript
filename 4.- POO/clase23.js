//Herencia prototipal
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn 
    claseHija.prototype.constructor = prototipoHijo
}

//Definir prototipos son como clases
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log('Hola, me llamo ' + this.nombre + ' ' + this.apellido)
}

//Funcion para saber si soy alto
Persona.prototype.soyAlto =  () => this.altura > 1.8

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
//Metodo de herencia
heredaDe(Desarrollador, Persona)


Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}


var cristian = new Persona('Cristian', 'Hernandez', 1.72)
var darsi = new Persona('Darsi', 'Pereira', 1.8)

cristian.saludar()
cristian.soyAlto()