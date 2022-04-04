// Imports
import presentDrinks from './src/presentDrinks.js';
// Nous pouvons importer de cette manière, les fonctions de searchForm s'exécuteront dans apps.js
import './src/searchForm.js';

// Variables
const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

// Init, affiche une page de cocktails commençant par A
window.addEventListener('DOMContentLoaded', () => {
	presentDrinks(DRINKS_URL);
});