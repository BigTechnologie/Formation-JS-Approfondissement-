// ===============================
// Cas avec async / await et fetch
// ===============================

// Version avec server local
//const request = "http://127.0.0.1:5500/api/pizza.json";

// version avec tout type de server
const request = location.origin + '/api/pizza.json';

// Définition de ma fonction asynchrone pour recuperer les données
const getPizzaData = async () => {
    let response = await fetch(request)

    let pizzas = await response.json()

    return pizzas;
    //console.log(pizzas)

}

// Déclaration d'une fonction asynchrone avec async permettant retourner les données
const useData = async () => {

    const data = await getPizzaData()

    // Récupération de lélément HTML ayant l'id "app" dans index.html
    const app = document.getElementById('app')

    app ? app.innerHTML = "" : null

    data.forEach(product => {
        // Création d'un Template HTML dynamique avec les données du produit
        // Exemple : price = 0.1 + 0.2 = 0.300000000.....4 => Inacceptable 
        const productItem = `
            <div class="product-item">
                <img src="${product.image}" width="150" alt="">
                <div class="product-details">
                    <div class="product-name">${product.name}</div>
                    <div>
                        <span class="sold-price">${product.soldPrice/100}</span>
                        <span class="regular-price"><del>${product.price/100}</del></span>
                    </div>
                </div>
            </div>
        `

        // Ajout du produit au DOM => Ajouter le HTML géneré dans l'élément "app"
        app.innerHTML += productItem
        //console.log(productItem);

    });

}

useData();


