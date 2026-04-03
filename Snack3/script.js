/**
 * SNACK 3
 * Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
 */

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

/**
 * Vengono creati 9 oggetti . 
 * il primo oggetto hamburger contiene anche maker e restaurant ( 2 oggetti).
 * Cosi come per secondBurger e thirdBurger , questo perchè structuredclone crea una copia profonda
 */