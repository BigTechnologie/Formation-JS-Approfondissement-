// Objet contenant les fonctions listeners
const listenerFunction = {
    h2Click: function(event) { // Utilisation de l'objet event

        // Utilisation de l'objet event
        /*
        const element = event.target;
        element.style.fontSize = "2.1rem";
        if(element && element.style.color == "red") {
            element.style.color = "blue";
        }else {
            element.style.color = "red"
        }
        */

        // Utilisation du "this" => this vaut h2
        this.style.fontSize = "2.1rem";
        if(this.style.color && this.style.color == "red") {
            this.style.color = "green";
        } else {
            this.style.color = "red";
        }

        const sectionCss = document.querySelector('#css');
        sectionCss.style.backgroundColor = "black";
        sectionCss.style.color = "white";
        sectionCss.style.border = "3px solid red";

        console.log("La section CSS a changé de style");

        console.log("Click détecté sur la Balise h2");
        

    }
}

// Mise en place des abonnements
    const setupListeners = () => {
        const h2 = document.querySelector('section#html h2');

        h2.addEventListener('click', listenerFunction.h2Click);
    }