// Récupère la barre de recherche
const search = document.getElementById('search');

// Récupère la zone où les résultats vont s'afficher
const results = document.getElementById('results');

// Modèle HTML pour chaque carte de film
const card = `
<a class="card mb-3" style="max-width: 540px;" href="LINK">
    <div class="row g-0">

        <div class="col-md-4">

            <img src="IMG"
                 style="object-fit: cover; width: 100%; height: 100%;"
                 class="img-fluid rounded-start"
                 alt="...">

        </div>

        <div class="col-md-8">

            <div class="card-body">

                <h5 class="card-title">TITLE</h5>

                <p class="card-text"
                   style="
                        display: -webkit-box;
                        -webkit-line-clamp: 5;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                   ">
                    RESUME
                </p>

                <p class="card-text">
                    <small class="text-muted">DATE</small>
                </p>

            </div>

        </div>

    </div>
</a>
`;

// Variable utilisée pour le debounce
let timeout;

// Loader affiché pendant la recherche
const loading = document.getElementById('loading');

// Événement déclenché quand l'utilisateur tape au clavier
search.addEventListener('keydown', () => {

    // Affiche le loader
    loading.style.display = 'block';

    // Vide les anciens résultats
    results.innerHTML = '';

    // Annule le précédent délai si l'utilisateur continue à taper
    clearTimeout(timeout);

    // Lance la recherche après 1 seconde
    timeout = setTimeout(searchMovie, 1000);

});

// Fonction asynchrone de recherche de films
async function searchMovie() {

    // Récupère la valeur saisie sans les espaces inutiles
    const query = search.value.trim();

    // Vérifie si le champ est vide
    if (!query) {

        // Cache le loader
        loading.style.display = 'none';

        // Vide les résultats
        results.innerHTML = '';

        // Stoppe la fonction
        return;
    }

    try {

        // Requête HTTP vers l'API TMDB. Une URL d’API est souvent composée de : PROTOCOLE://DOMAINE/ROUTE?PARAMETRES
        // L’adresse du service: https://api.themoviedb.org/3/search/movie | Clé API: 625b3e1220c0fca7c7ac7f6fcca786ac | Langue: fr_FR | Recherche: query
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=625b3e1220c0fca7c7ac7f6fcca786ac&language=fr_FR&query=${encodeURIComponent(query)}`
        );

        // Vérifie si la requête HTTP a réussi
        if (!response.ok) {

            // Déclenche une erreur personnalisée
            throw new Error("Erreur lors de la requête vers l'API");
        }

        // Conversion de la réponse JSON en objet JavaScript
        const data = await response.json();

        // Vérifie si aucun film n'a été trouvé
        if (!data.results || data.results.length === 0) {

            // Affiche un message
            results.innerHTML = `<p>Aucun film trouvé pour "${query}"</p>`;

            // Cache le loader
            loading.style.display = 'none';

            return;
        }

        // Variable contenant le HTML final
        let fullContent = '';

        // Boucle sur tous les films retournés
        data.results.forEach(film => {

            // Copie du modèle HTML
            let content = card;

            // Remplacement du titre
            content = content.replace('TITLE', film.title);

            // Remplacement du résumé
            content = content.replace('RESUME', film.overview);

            // Remplacement de la date
            content = content.replace(
                'DATE',
                film.release_date || 'Date inconnue'
            );

            // Remplacement du lien du film
            content = content.replace(
                'LINK',
                "https://www.themoviedb.org/movie/" + film.id
            );

            // Vérifie si une image existe
            if (film.poster_path) {

                // Utilise l'image TMDB
                content = content.replace(
                    'IMG',
                    'https://image.tmdb.org/t/p/w500' + film.poster_path
                );

            } else {

                // Sinon utilise une image par défaut
                content = content.replace(
                    'IMG',
                    'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
                );
            }

            // Ajoute la carte au contenu final
            fullContent += content;

        });

        // Affiche tous les films dans la page
        results.innerHTML = fullContent;

    } catch (error) {

        // Affiche les erreurs éventuelles
        results.innerHTML = `<p>Erreur : ${error.message}</p>`;

    } finally {

        // Cache toujours le loader
        loading.style.display = 'none';
    }
}