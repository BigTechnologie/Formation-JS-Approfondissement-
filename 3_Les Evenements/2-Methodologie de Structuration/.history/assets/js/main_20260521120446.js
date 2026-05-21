const h2 = document.querySelector('#html h2');
//console.log(h2);

const listenerFunction = () => {

    const article = document.getElementsByClassName('article')[1];
    article.style.backgroundColor = "Black";
    article.style.color = "white";
    article.style.fontSize = "2.1rem";
    article.style.border = "1px solid red";


    //window.alert("Click détecté sur la balise H2");

    console.log("Click détecté sur la balise H2");

    h2.removeEventListener('click', listenerFunction)
}

//h2.addEventListener('dblclick', listenerFunction);
h2.addEventListener('click', listenerFunction);

