const h2 = document.querySelector('#html h2');

// Création d'un objet qui va contenir mes fonctions listeners
const listenerFunction = {
    h2DblClick: () => {
        console.log("Click détecté sur la balise H2");

    h2.removeEventListener('dlclick', listenerFunction)
    }
}



const listenerFunction = () => { 

    console.log("Click détecté sur la balise H2");

    h2.removeEventListener('dlclick', listenerFunction)
}

h2.addEventListener('dblclick', listenerFunction);

