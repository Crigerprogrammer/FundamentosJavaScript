//Definir prototipos son como clases
function Persona(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

Persona.prototype.saludar = function () {
    console.log('Hola, me llamo ' + this.nombre + ' ' + this.apellido)
}

var cristian = new Persona('Cristian', 'Hernandez')
var darsi = new Persona('Darsi', 'Pereira')
cristian.saludar()