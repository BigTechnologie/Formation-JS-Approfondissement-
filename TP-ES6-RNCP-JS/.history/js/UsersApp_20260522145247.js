class Users {

    // Propriétés de classe avec des valeurs par defaut (ES6+)
    table = null;
    listes = [];
    sensTri = 1;

    // Construction de la table et de son en-ête
    builTable () {
        this.table = document.createElement('table');

        const headerRow = this.table.insertRow();

        const columns = [
            {label: 'Family name', id: 'family'},
            {label: 'Given Name', id: 'given'}
        ];

        // Création dynamique des cellule d'en-tête
        columns.forEach(({label, id}) => {
            const cell = headerRow.insertCell();
            cell.textContent = label; // Ce qui s'affiche
            cell.id = id; // On n'a un attribut HTML invisible
        });

        // Insertion de la table dans le DOM
        out.appenChild(this.table);
    }

    // Chargement des données depuis le server
    async load() {

        // URL du server distant
        const URL = 'https://adok.org/form/bibliotech/users.php';

        // Préparation des données POST
        const fd = new FormData();
        fd.append('action', 'lister');

        try {

            const response = await fetch(URL, {
                method: 'POST',
                body: fd
            });

            // Vérification du succès 
            if(!response.ok) throw new Error('Erruer lors du chargement');

            // Conversion de la response en JSON
            this.listes = await response.json();
            
        } catch (error) {
            console.error(error);
        }

    }

    // Construction des lignes de données
    buildRows() {
        // Suppresion des anciennes lignes
        this.removeRows();

        // Création des lignes à partir des donnés
        this.listes.forEach(({fammilyName, givenName}) => {
            const row = this.table.insertRow();
            row.insertCell().textContent = fammilyName;
            row.insertCell().textContent = givenName;
        });
    }

    // Suppression de toutes lignes sauf l'en-tête
    removeRows() {
        [...this.table.rows]
            .slice(1) // Ignore la première ligne
            .forEach(row => row.remove()); // Supprime les lignes restantes du DOM
    }

    // Methode de trie
    sortBy(property) {
        this.listes.sort((a, b) =>
            a[property].localeCompare(b[property]) * this.sensTri
        );

        // Inversion du sens de trie pour le prochain appel
        
    }



}