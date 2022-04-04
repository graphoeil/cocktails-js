// Imports
import getElement from './getElement.js';
import { hideLoading } from './toggleLoading.js';

// Variables
const section = getElement('.section-center');
const error = getElement('.title');

// Show drinks on DOM
const displayDrinks = (data) => {
	// Destructuration, nous aurions pu le faire dans les paramètres ,-)
	const { drinks } = data;
	// Results ?
	if (!drinks){
		// Hide loading
		hideLoading();
		// Message d'erreur et nous supprimons le contenu de la section qui contient les cocktails
		error.textContent = 'Sorry, no drinks matched your search';
		section.innerHTML = null;
		return;
	}
	// Drinks DOM
	const newDrinks = drinks.map((drink) => {
		// Variables
		const { idDrink:id, strDrink:name, strDrinkThumb:image } = drink;
		// Return
		return(
			`<a href="drink.html">
				<article class="cocktail" data-id="${ id }">
					<img src="${ image }" alt="${ name }">
					<h3>${ name }</h3>
				</article>
			</a>`
		);
	}).join('');
	// Hide loading, error ...
	hideLoading();
	error.textContent = '';
	// Section
	section.innerHTML = newDrinks;
	// Return
	return section;
};

// Export
export default displayDrinks;