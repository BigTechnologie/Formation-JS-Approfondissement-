// Récupère la barre de recherche 
let search = document.getElementById('search');

// Récupère la zone où les résultats vont s'afficher 
let results = document.getElementById('results');

// Modèle HTML pour afficher une carte de film
let card = `
<a class="card mb-3" style="max-width: 540px;" href="LINK">
    <div class="row g-0">
        <div class="col-md-4">
        <img src="IMG" style="object-fit: cover; width: 100%; height: 100%;" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">TITLE</h5>
            <p class="card-text" style="display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden;">RESUME</p>
            <p class="card-text"><small class="text-muted">DATE</small></p>
        </div>
        </div>
    </div>
</a>
`;

// Variable pour gérer le délai entre chaque frappe (debounce)
let timeout;

// Récupère l'élément HTML avec l'ID 'loading' (pour afficher un indicateur de chargement)
let loading = document.getElementById('loading');

// Ajoute un écouteur d'événement sur la barre de recherche 
search.addEventListener('keydown', () => {
    
    loading.style.display = 'block';
    
    results.innerHTML = '';
   
    clearTimeout(timeout);

    // Lance la recherche après 1 secondeCela évite de faire une requête à chaque touche pressée
    timeout = setTimeout(searchMovie, 1000);
});

// Fonction qui effectue la recherche d'un film via l'API TMDB
function searchMovie() {

    // Récupère la valeur saisie dans la barre de recherche
    let query = search.value; 

    // Crée un objet pour faire la requête AJAX (Crée une nouvelle requête AJAX)
    let requete = new XMLHttpRequest();

    // readyState : c'est l'état de la requête // Détecte les changements d'état de la requête
    // 0 : non initialisée (open() n’a pas encore été appelée)
    // 1 : connection établie (open() a été appelée)
    // 2 : requête reçue (send() a été appelée)
    // 3 : traitement en cours
    // 4 : terminé et réponse prête
    requete.onreadystatechange = function() {
        // Ici, on vérifie si la requête est terminée
        // readyState === 4 signifie que la réponse est complète et prête à être utilisée
        if (requete.readyState === XMLHttpRequest.DONE) { // Mieux que "4", plus lisible
            // On peut maintenant récupérer la réponse  // En transformant la réponse JSON en objet JavaScript
            let reponse = JSON.parse(requete.responseText); // parse : Convertit une chaîne de caractères JSON (JavaScript Object Notation) en un objet.

            // Variable pour stocker le contenu HTML complet
            let fullContent = '';

            // Si l'API retourne des résultats // Vérifie si la réponse contient des résultats
            if (reponse.results) {
                // Parcourt tous les films retournés par l'API
                reponse.results.forEach(film => {
                    let content = card;

                    // Remplace les placeholders par les vraies données du film
                    content = content.replace('TITLE', film.title);            // Titre du film
                    content = content.replace('RESUME', film.overview);        // Résumé du film
                    content = content.replace('DATE', film.release_date);      // Date de sortie du film
                    content = content.replace('LINK', "https://www.themoviedb.org/movie/" + film.id); // Lien vers la fiche du film // Lien vers le film sur TMDB

                    // Si le film a une image (poster), on l'affiche 
                    if (film.poster_path) {
                        content = content.replace('IMG', 'https://image.tmdb.org/t/p/w500' + film.poster_path);
                    } else {
                        // Sinon, affiche une image par défaut
                        content = content.replace('IMG', 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg');
                    }

                    // Ajoute cette carte au contenu final 
                    fullContent += content;
                });
            }

            // Affiche tous les films dans la page // Affiche toutes les cartes dans l'élément results
            results.innerHTML = fullContent;

            // Cache le loader (indicateur de chargement) une fois la recherche terminée
            loading.style.display = 'none';
        }
    }

    // Prépare la requête GET vers l'API TMDB
    requete.open('GET', "https://api.themoviedb.org/3/search/movie?api_key=625b3e1220c0fca7c7ac7f6fcca786ac&language=fr_FR&query=" + query);

    // Envoie la requête
    requete.send();
}
