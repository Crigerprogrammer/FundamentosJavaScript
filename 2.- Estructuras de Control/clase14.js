var cristian = {
    nombre: 'Cristian',
    apellido: 'Hernandez',
    edad: 21,
    peso: 88
}

console.log(`Al inicio del año ${cristian.nombre} pesa ${cristian.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

//CICLOS FOR
for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random()

    if(random < 0.25){
        //Aumenta de peso
        aumentarDePeso(cristian)
    }else if(random < 0.5){
        //Adelgazar
        adelgazar(cristian)
    }
}

console.log(`Al final del año ${cristian.nombre} pesa ${cristian.peso.toFixed(2)}kg`)

const META = cristian.peso -3
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
var dias = 0

//Ciclos WHILE
while (cristian.peso > META) {
    //Debbuger
    debugger
    if(comeMucho()){
       //Aumentar de Peso
       aumentarDePeso(cristian) 
    }
    if(realizaDeporte){
        //Adelgazar
        adelgazar(cristian)
    }
    dias += 1
}

console.log(`Al final del año ${cristian.nombre} pesa ${cristian.peso.toFixed(2)}kg`)
