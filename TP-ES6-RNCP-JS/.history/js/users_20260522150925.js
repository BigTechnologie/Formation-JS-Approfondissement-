"use stricte";

let users = new Users();

// Construction de la table (EN-TETE)
Users.builTable();

// Chargement des données (asynchrone)
users.load()
    .then(() => {
        users.buildRows();
    })
    .catch(error => {
        console.error('Problème serveur', error)
    });

    // Gestion des événements de trie
family.addEventListener('click')    
    

