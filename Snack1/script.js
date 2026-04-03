/**
 * Code Question 1
 * Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
 */

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger 
console.log(secondBurger.name ); // Double Cheese Burger

//Viene creato solo l'oggetto iniziale , la riga const secondBurger = hamburger non crea un nuovo oggetto
// ma copia solo il riferimento allo stesso oggetto gia esistente , quindi entrambe le variabili si riferiscono allo stesso oggetto in memoria.
// Quindi 1 oggetto e 2 variabili che puntano allo stesso oggetto. 