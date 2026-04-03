/**
 * Crea una funzione che permette la copia profonda (deep copy) di un oggetto, 
 * che copia anche i suoi metodi (proprietà che contengono funzioni). 
 * Usa l’oggetto di Code Question 6 come test.
 */

function deepCopy(obj) {
    //se non è un oggetto oppure è null lo restituisco cosi come è 
    if(obj == null || typeof obj !== "object") {
        return obj;
    }

    //se è un array, creo un nuovo array copiando ricorsivamente ogni elemento
    if(Array.isArray(obj)) {
        return obj.map(i => deepCopy(i));
    }

    //se è un oggetto normale creo un nuovo oggetto
    const copy = {}; 
    for(let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}


const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      }
    },
    isOpen: true,
  }
};


// CLONE PROFONDO
const copiedChef = deepCopy(chef);

console.log(copiedChef); 