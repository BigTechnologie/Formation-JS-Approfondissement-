// Objet contenant les fonctions listeners
const listenerFunction = {
    h2Click: function(event) {
        const element = event.target;
        element.style.fontSize = "2.1rem";
        if(element && element.style.color == "red") {
            element.style.color = "blue";
        }else {
            element.style.color = "red"
        }

        const sectionCss = document.querySelector('#css');


        console.log("Click détecté sur la Balise h2");

    }
}

// Mise en place des abonnements
    const setupListeners = () => {
        const h2 = document.querySelector('section#html h2');

        h2.addEventListener('click', listenerFunction.h2Click);
    }