var cristian = {
    nombre= 'Cristian',
    apellido = 'Hernandez',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    //Usando condicionales
    if(persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es Ingeniero')
    }

    if(persona.cocinero){
        console.log('Cocinero')
    }
    if(persona.cantante){
        console.log('Cantante')
    }
    if(persona.dj){
        console.log('Dj')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }
    if(persona.drone){
        console.log('Drone')
    }
}
    
imprimirProfesiones(cristian)

//Escribir funcion imprimirsiesmayor de edad
function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad > 18)
    {
        console.log(persona.nombre + ' Es mayor de edad')
    }else{
        console.log(persona.nombre + ' Es menor de edad')
    }
}