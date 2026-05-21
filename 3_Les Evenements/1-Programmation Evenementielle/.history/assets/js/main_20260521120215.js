const h2 = document.querySelector('#html h2');
//console.log(h2);

const listenerFunction = () => {

    const article = document.getElementsByClassName('article')[1];
    article.computedStyleMap.backgroundColor = "Black";
    article.computedStyleMap.color = "white";


    //window.alert("Click détecté sur la balise H2");

    console.log("Click détecté sur la balise H2");

    h2.removeEventListener('click', listenerFunction)
}

//h2.addEventListener('dblclick', listenerFunction);
h2.addEventListener('click', listenerFunction);

