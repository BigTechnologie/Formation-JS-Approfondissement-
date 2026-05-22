"use stricte";

const books = new Books();

async function initBooks() {
    try {
        await books.load();

        // Construction de l'affichage
        books.buidDiv();
    } catch (error) {
        console.error('Problème serveur', )
    }
}