//API URL Donde consumimos
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
//constante con la funcion
const onPeopleResponse = function(persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}

//Funcion callback para invocar la API
function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

//Asincronismo, realizamos los request pero no sabemos
//A que orden llegaran  
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
