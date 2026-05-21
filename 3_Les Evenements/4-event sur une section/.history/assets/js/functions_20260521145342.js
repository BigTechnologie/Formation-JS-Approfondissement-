// Objet contenant les fonctions listeners
const listenerFunction = {
    h2Click: function(event) { // Utilisation de l'objet event

        // Utilisation de l'objet event
        const element = event.target;
        element.style.fontSize = "2.1rem";
        if(element && element.style.color == "red") {
            element.style.color = "blue";
        }else {
            element.style.color = "red"
        }

        console.log("Click détecté sur la Balise h2")   
    },

    bgSectionManage: function() {
        if(this && this.style.backgroundColor == "red") {
            this.style.backgroundColor = "green"
            this.style.color 
        }
    }

}

// Mise en place des abonnements
    const setupListeners = () => {
        const h2 = document.querySelector('section#html h2');

        h2.addEventListener('click', listenerFunction.h2Click);
    }