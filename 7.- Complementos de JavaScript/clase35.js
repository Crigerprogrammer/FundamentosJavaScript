var cristian = {
    nombre: 'Cristian',
    apellido: 'Hernandez',
    edad: 28

}

function esMayorDeEdad(persona){
    if(persona.edad > 18){
        var mensaje = 'Es mayor deedad'
    }else{
        var mensaje = 'Es menor de edad'
        var mensaje2 = 'Este es otro mensaje'
    }
    console.log(mensaje)
}

esMayorDeEdad(cristian)