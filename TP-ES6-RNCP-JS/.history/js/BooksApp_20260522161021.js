
class Books {

    listes = [];

    async load() {

        // URL du server distant
        const URL = 'https://adok.org/form/bibliotech/books.php';

        // Préparation des données POST
        const fd = new FormData();
        fd.append('action', 'lister');

        try {

            const response = await fetch(URL, {
                method: 'POST',
                body: fd
            });

            // Vérification du succès 
            if(!response.ok) throw new Error('Erruer lors du chargement des livres');

            // Conversion de la response en JSON
            this.listes = await response.json();
            
        } catch (error) {
            console.error("Erreur détectée :", error);
        }

    }

    buidDiv() {
        const URL_BASE_IMG = 'https://adok.org/form/bibliotech/img/book'
    }

}