//Comparador = de asignacion
var x = 4, y = '4'
//Comparador == para preguntar si es igual a
x == y 
//Comparador === para preguntar igualacion de tipo y valor
x === y
//Creando objeto
var cristian = {
    nombre: 'Cristian'
}

var otraPersona = {
    nombre: 'Cristian'
}
//La unica manera para que dos objetos sean iguales en JS es asignando el objeto a la misma variable
otraPersona = cristian // true
