const h2 = document.querySelector('#html h2');
//console.log(h2);

const listenerFunction = () => {

    window.alert()

    console.log("Click détecté sur la balise H2")
}

h2.addEventListener('dblclick', listenerFunction);

