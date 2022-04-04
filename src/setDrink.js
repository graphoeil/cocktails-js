/* Il aurait été plus simple de récupérer l'id depuis l'adresse url 
via new URLSearchParams(window.location.search) ... */

// Cocktail cliqué depuis la section principale
const setDrink = (section) => {
	// Event listener sur le parent pour obtenir l'id (bubble)
	/* Il est en effet impossible de placer un event listener 
	sur des éléments qui ne figurent pas dans le DOM à l'initialisation,
	il faut donc le placer sur un élément déjà présent, merci Carl et jQuery ,-) */
	section.addEventListener('click', (e) => {
		e.preventDefault();
		// L'id est sur l'article qui contient l'image
		const id = e.target.parentElement.dataset.id;
		// localStorage pour passer l'id
		localStorage.setItem('cocktailAPI',id);
		// Redirection vers la page
		window.location = 'drink.html';
	});
};

// Export
export default setDrink;