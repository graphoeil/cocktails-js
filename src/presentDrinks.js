// Imports
import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

// Afficher les cocktails
const presentDrinks = async(url) => {
	// Fetch drinks
	const data = await fetchDrinks(url);
	// Display drinks renverra la section HTML
	const section = await displayDrinks(data);
	// Des cocktails ont été trouvés, nous définissons
	// cette section dans setDrink
	if (section){
		setDrink(section);
	}
};

// Export
export default presentDrinks;