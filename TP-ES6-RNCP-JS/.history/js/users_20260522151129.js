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
    
    
family.addEventListener('click', evt => {
    users.sortFamilyName();

    users.removeRows();

    users.buildRows();
});    
    

