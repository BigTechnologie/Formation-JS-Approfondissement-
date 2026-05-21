// ===============================
// Exemple avec Promise, async / await
// ===============================

// Cette fonction simule un appel asynchrone (API, BDD, etc.)
const getData = ()=>{
    return new Promise((resolve, reject)=>{ 
        setTimeout(()=>{ 
            let success = true;
            if(success) {
            resolve([
                {
                    name: "4 Fromages",
                    description: "Sauce tomate à l'origan ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d'Ambert AOP",
                    price: 2999,
                    soldPrice: 1999,
                    category: "pizza homme",
                    image: "/assets/images/pizza/4-fromages.jpg"
                },
                {
                    name: "BPM",
                    description: "Sauce barbecue, mozzarella, haché au bœuf, filet de poulet rôti et merguez",
                    price: 2599,
                    soldPrice: 1299,
                    category: "pizza homme",
                    image: "/assets/images/pizza/bpm.jpg"
                },
                {
                    name: "Pepperoni Lovers",
                    description: "Sauce tomate à l'origan, mozzarella et saucisse pepperoni",
                    price: 3599,
                    soldPrice: 1399,
                    category: "pizza homme",
                    image: "/assets/images/pizza/pepperoni.jpg"
                },
                {
                    name: "Queen",
                    description: "Sauce tomate à l'origan, mozzarella, jambon et champignons frais",
                    price: 2599,
                    soldPrice: 1299,
                    category: "pizza homme",
                    image: "/assets/images/pizza/queen.jpg"
                },
                {
                    name: "Montagnarde",
                    description: "Crème fraîche légère, mozzarella, jambon cru, fromage à raclette et champignons frais",
                    price: 2599,
                    soldPrice: 1255,
                    category: "pizza homme",
                    image: "/assets/images/pizza/montagnarde.jpg"
                },
                {
                    name: "Suprême",
                    description: "Sauce tomate à l'origan ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d'Ambert AOP",
                    price: 4599,
                    soldPrice: 1499,
                    category: "pizza homme",
                    image: "/assets/images/pizza/supreme.jpg"
                },
                {
                    name: "Raclette",
                    description: "Crème fraîche légère, mozzarella, pommes de terre, lardons et fromage à raclette",
                    price: 3599,
                    soldPrice: 1399,
                    category: "pizza homme",
                    image: "/assets/images/pizza/raclette.jpg"
                },
                {
                    name: "Chèvre Miel",
                    description: "Crème fraîche légère, mozzarella, fromage de chèvre, miel",
                    price: 2999,
                    soldPrice: 1199,
                    category: "pizza homme",
                    image: "/assets/images/pizza/chevre-miel.jpg"
                },
                {
                    name: "Chicken Barbecue",
                    description: "Sauce barbecue, mozzarella, filet de poulet rôti, oignons rouges frais, champignons frais et poivrons verts frais",
                    price: 2999,
                    soldPrice: 1399,
                    category: "pizza homme",
                    image: "/assets/images/pizza/chicken-barbecue.jpg"
                },
                {
                    name: "Orientale",
                    description: "Sauce tomate à l'origan, mozzarella, merguez et champignons frais",
                    price: 2999,
                    soldPrice: 1999,
                    category: "pizza homme",
                    image: "/assets/images/pizza/orientale.jpg"
                },
                {
                    name: "Margherita",
                    description: "Sauce tomate à l'origan et mozzarella",
                    price: 2999,
                    soldPrice: 1399,
                    category: "pizza homme",
                    image: "/assets/images/pizza/margherita.jpg"
                },
                {
                    name: "Nordique",
                    description: "Crème fraîche légère, mozzarella et saumon fumé de Norvège",
                    price: 3999,
                    soldPrice: 1499,
                    category: "pizza homme",
                    image: "/assets/images/pizza/nordique.jpg"
                }
            ])
            } else {
                reject("Erreur : impossible de récupérer les données");
            }
        },10000)  // délai de 10 secondes avant la résolution de la Promise
    })
}

// Déclaration d'une fonction asynchrone avec async permettant retourner les données
const useData = async () => {
    const data = await getData()

    // Récupération de lélément HTML ayant l'id "app" dans index.html
    const app = document.getElementById('app')

    app ? app.innerHTML = "" : null

    data.forEach(product => {
        // Création d'un Template HTML dynamique avec les données du produit
        const productItem = `
            <div class="product-item">
                <img src="${product.image}" width="150" alt="">
                <div></div>
            </div>
        `

    });

}

/*
1- image
2- name
3- soldPrice
4- price

*/
