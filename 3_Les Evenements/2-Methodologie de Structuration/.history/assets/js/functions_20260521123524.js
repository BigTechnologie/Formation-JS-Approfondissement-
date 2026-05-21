const h2 = document.querySelector('#html h2');

// Création d'un objet qui va contenir mes fonctions listeners
const listenerFunction = {
    h2DblClick: () => {
        console.log("Click détecté sur la balise H2");
        
    }
}

// Mise en place des abonnements (event listeners)
const setupListeners = () => { 
    h2.addEventListener('dblclick', listenerFunction);
}



