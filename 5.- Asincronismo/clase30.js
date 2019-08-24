//API URL Donde consumimos
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

//Funcion callback para controlar Asincronismo 
function obtenerPersonaje(id) {
    //Sintaxis de promesas
    return new Promise((resolve, reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

//Declaracion de llamado de promesas
obtenerPersonaje(1)
    .then(function(personaje){
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError)