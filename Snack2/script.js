
/**SNACK 2
 * Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
 */

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad

/*
Vengono creati 3 oggetti in memoria ,ovvero
1) l'oggetto hamburger
 2) l'array ingredients
 3) il nuovo array second burger creato con lo spread

Le proprietà di primo livello vengono effettivamente copiate ( name e weight) nel nuovo array(secondBurger) , mentre
la proprietà ingredients non viene duplicata davvero e punterà all'array hamburger
*/