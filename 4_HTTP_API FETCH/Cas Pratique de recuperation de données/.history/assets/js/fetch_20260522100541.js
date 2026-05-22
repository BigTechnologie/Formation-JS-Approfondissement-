// Complement d'informations
/*
Méthodes de requêtes
GET
POST
PUT
DELETE
PATCH
*/

/*
const request = "http://127.0.0.1:5500/api/pizza.json";

fetch(request)
    // Traitement de la response HTTP
    .then((response) => {
        return response.json();
    })
    // Recuperation du resultat d ela promesse
    .then((result) => {
        console.log(result);
    })

*/

const request = "http://127.0.0.1:5500/api/pizza.json";

const getPizzaData = async () => {
    let response = await fetch(request);
    let pizzas = await response.json()
    console.log(pizzas);
}


