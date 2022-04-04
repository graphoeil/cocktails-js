// Imports
import fetchDrinks from './src/fetchDrinks.js';
import displaySingleDrink from './src/displaySingleDrink.js';

// Variables
const SINGLE_DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
// Id from localStorage
const id = localStorage.getItem('cocktailAPI');
// .replace() interdit le retour en arrière dans le navigateur, window.location = ... l'autorise ,-)
if (!id){ window.location.replace('index.html'); }

// Afficher le cocktail
const presentDrink = async() => {
	// Fetch drink
	const drink = await fetchDrinks(`${ SINGLE_DRINK_URL }${ id }`);
	// Display drink
	displaySingleDrink(drink);
};

// Init
window.addEventListener('DOMContentLoaded', presentDrink);