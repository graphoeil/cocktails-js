// Imports
import getElement from './getElement.js';
import presentDrinks from './presentDrinks.js';
const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// Variables
const form = getElement('.search-form');
// Sélection del 'input via l'attribut link
// const input = getElement('[name="drink"]');
const input = document.querySelector('[name="drink"]');

// Events listener
let searchTimer = null;
form.addEventListener('keyup', (e) => {
	e.preventDefault();
	if (searchTimer){ clearTimeout(searchTimer); }
	searchTimer = setTimeout(() => {
		const value = input.value;
		if (!value){ presentDrinks(`${ SEARCH_URL }a`); }
		presentDrinks(`${ SEARCH_URL }${ value }`);
	},200);
});