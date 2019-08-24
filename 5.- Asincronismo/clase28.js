//API URL Donde consumimos
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

//Funcion callback para controlar Asincronismo 
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(url, opts, function(persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if(callback){
            callback()
        }
    })
}

//Funcion Callback para controlar el asincronismo en JS
obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3)
    })
})