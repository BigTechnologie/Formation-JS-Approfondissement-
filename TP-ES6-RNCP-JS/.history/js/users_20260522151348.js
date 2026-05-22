"use stricte";

let users = new Users();

// Construction de la table (EN-TETE)
userssers.builTable();

// Chargement des données (asynchrone)
users.load()
    .then(() => {
        users.buildRows();
    })
    .catch(error => {
        console.error('Problème serveur', error)
    });
    
// Gestion des événements de trie    
family.addEventListener('click', evt => {
    users.sortFamilyName();

    users.removeRows();

    users.buildRows();
});

//
given.addEventListener('click', evt => {
    users.sortGivenName();

    users.removeRows();

    users.buildRows();
});
    

