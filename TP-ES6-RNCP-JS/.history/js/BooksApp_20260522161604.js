
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
        const URL_BASE_IMG = 'https://adok.org/form/bibliotech/img/book';

        this.listes.forEach((livre) => {
            const div = document.createElement('div');

            // Image du livre
            const img = new Image(200, 200);

            // Construction dynamique de l'URL de l'image. Exemple :book_3.jpg
            img.src = `${URL_BASE_IMG}_${livre.id}.jpg`;

            // Texte alternatif pour l'accessibilité du web
            img.alt = livre.title;
            


        })
    }

}