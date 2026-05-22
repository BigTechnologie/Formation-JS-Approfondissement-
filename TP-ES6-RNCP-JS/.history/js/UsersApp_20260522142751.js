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
            
        } catch (error) {
            
        }

    }



}