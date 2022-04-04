// Imports
import { showLoading } from './toggleLoading.js';

// Fetch drinks from Cocktails API
const fetchDrinks = async(url) => {
	// Loading
	showLoading();
	// Try, catch
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch(error){
		console.log(error);
	}
};

// Export
export default fetchDrinks;