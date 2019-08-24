//API URL Donde consumimos
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

//Funcion callback para controlar Asincronismo 
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    //Metodo fail por si sucede un error en el request
    $
    .get(url, opts, callback)
    .fail(function() {
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    })
}

//Funcion Callback para controlar el asincronismo en JS
obtenerPersonaje(1, function(personaje){
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3)
    })
})