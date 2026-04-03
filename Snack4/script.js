/**
 * Snack 4
 */

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

/**
 * DOMANDA 1: 
Qual è il metodo migliore per clonare l’oggetto chef, e perché? 
Tramite spread , perchè può copiare funzioni al contrario di structuredClone
 */

/**
 * DOMANDA 2:
 * Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
 * Tramite structuredClone perchè gestisce oggetti complessi ( oggetto Date )
 */