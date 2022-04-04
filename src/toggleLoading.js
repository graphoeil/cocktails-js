// Imports
import getElement from './getElement.js';

// Variables
const loading = getElement('.loading');

// Show loading
export const showLoading = () => {
	loading.classList.remove('hide-loading');
};

// Hide loading
export const hideLoading = () => {
	loading.classList.add('hide-loading');
};