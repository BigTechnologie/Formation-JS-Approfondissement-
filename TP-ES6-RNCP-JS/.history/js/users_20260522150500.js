"use stricte";

let users = new Users();

// Construction de la table (EN-TETE)
Users.builTable();

// Chargement des données (asynchrone)
users.load()
    .then(() => {
        users.buildRows();
    })
    .catch()

