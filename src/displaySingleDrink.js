// Imports
import getElement from './getElement.js';
import { hideLoading } from './toggleLoading.js';

// Affichage du cocktail sélectionné
const displaySingleDrink = (cocktail) => {
	// Hide loading
	hideLoading();
	// Destructuration
	const { strDrinkThumb:image, strDrink:name, strInstructions:description } = cocktail.drinks[0];
	const ingredients = [
		cocktail.drinks[0].strIngredient1,
		cocktail.drinks[0].strIngredient2,
		cocktail.drinks[0].strIngredient3,
		cocktail.drinks[0].strIngredient4,
		cocktail.drinks[0].strIngredient5,
		cocktail.drinks[0].strIngredient6,
		cocktail.drinks[0].strIngredient7,
		cocktail.drinks[0].strIngredient8,
		cocktail.drinks[0].strIngredient9,
		cocktail.drinks[0].strIngredient10,
		cocktail.drinks[0].strIngredient11,
		cocktail.drinks[0].strIngredient12,
		cocktail.drinks[0].strIngredient13,
		cocktail.drinks[0].strIngredient14,
		cocktail.drinks[0].strIngredient15
	];
	// Drink DOM
	const img = getElement('.drink-img');
	const drinkName = getElement('.drink-name');
	const drinkDescription = getElement('.drink-description');
	const drinkIngredients = getElement('.drink-ingredients');
	img.src = image;
	img.alt = name;
	document.title = name;
	drinkName.textContent = name;
	drinkDescription.textContent = description;
	const ingredientsDOM = ingredients.map((item) => {
		return item ? `<li><i class="far fa-check-square"></i>${ item }</li>` : null;
	}).join('');
	drinkIngredients.innerHTML = ingredientsDOM;
};

// Export
export default displaySingleDrink;