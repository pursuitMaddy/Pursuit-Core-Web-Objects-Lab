/**
 * Takes in a cat object and returns its species.
 * @param {Object} catObj
 * @param {string} catObj.species - The species of the cat.
 * @returns {string} - species
 */

const catSpecies = (catObj, species) => {
  return catObj.species;
};

/**
 * Takes in a cat object and a color. Add the key
 * color to the object pointing to the color passed in.
 * @param {Object} catObj
 * @param {string} color
 * @returns {Object} catObj
 */

const giveCatColor = (catObj, color) => {
  catObj.color = color;
  return catObj;
};

/**
 * Takes in a cat object and returns its 'texture', if it has that property.
 * If it does not have the 'texture' property "throw Error('Does not have texture property')"
 * @param {Object} catObj
 * @returns {string} Texture or throws error.
 * @throws {Error} 'Does not have texture property'
 */

const catTexture = (catObj, str) => {
  if (catObj["texture"]) {
    return catObj["texture"];
  } else {
    throw Error('Does not have texture property')
  }
}
/**
 * Takes in an object and returns all its keys as an array.
 * Does not use Object.keys in its implementation.
 * @param {Object}
 * @returns {string[]} All the keys from the object
 */
const objKeys = (obj) => {
  let arr = []
  let i = 0;
  for (let key in obj) {
    arr[i] = key;
    i++;
  }
  return arr;
};

/**
 * Takes in an object and returns all its keys as an array.
 * Uses Object.keys in its implementation.
 * @param {Object}
 * @returns {string[]} All the keys from the object
 */

const objKeys2 = (obj) => {
  return Object.keys(obj)
};

/**
 * Takes in an object and returns all the values as an array.
 * Does not use Object.values in its implementation.
 * @param {Object}
 * @returns {*[]} All the values from the object
 */
const objValues = (obj) => {
  let arr = []
  let i = 0;
  for (let key in obj) {
    arr[i] = obj[key];
    i++;
  }
  return arr;
};

/**
 * Takes in an object and returns all the values as an array.
 * Uses use Object.values in its implementation.
 * @param {Object}
 * @returns {*[]} All the values from the object
 */

const objValues2 = (obj) => {
  return Object.values(obj)
};

/**
 * Takes in an array of film objects and
 * returns a new array with only the directors listed.
 * @param {Object[]} films [{},{},{}]
 * @param {string} films[].director - The director of the film.
 * @returns {string[]} Only the directors
 */

const findDirectors = (films, director) => {
  let arr = []
  for (let i = 0; i < films.length; i++) {
    arr.push(films[i].director)
  }
  return arr;
};

/**
 * Takes in an array of people objects with with properties
 * firstName and lastName. Return a new array that has
 * everybody's full name.
 * firstName and lastName should be separated by one space only.
 * @param {Object[]} people - Array of person objects.
 * @param {string} people[].firstName - The person's first name.
 * @param {string} people[].lastName - The person's last name.
 * @returns {string[]} The full names of all people.
 */

const fullNames = (people, firstName, lastName) => {
  let names = [];
  for (let i = 0; i < people.length; i++) {
    names[i] = people[i].firstName + " " + people[i].lastName
  }
  return names;
};

/**
 * Takes in an object which maps a persons name to an array
 * of deposits that have been made to their account.
 *
 * Return the name and total amount of money deposited
 * of the person who received the most money.
 *
 * @param {Object} depositsByPerson
 * @returns {string} A string describing the largest earner in the form: "Davies made $4876"
 *
 * Exp Input:
 *  {
 *     Williams: [300, 270, 24, 52, 99],
 *     Cooper: [200, 55, 600, 305, 410, 35],
 *     Davies: [4008, 568, 300],
 *     Clark: [555, 457, 995, 806, 569, 46, 265],
 *     Johnson: [126, 300, 640, 255, 268],
 *  };
 */
const largestEarner = (deposits) => {
  let max = 0;
  let person = "";
  for (let key in deposits) {
    let total = 0;
    for (el of deposits[key]) {
      total += el
    }
    if (total > max) {
      max = total;
      person = key;
    }
  }
  return person + " made $" + max;
};

/**
 * Takes in an object and returns and array where
 * each key and value pair are together but separated by " & "
 * Exp Input: {"Peanut Butter": "Jelly"}
 * Output: ["Peanut Butter & Jelly"]
 * @param {Object} groups
 * @returns {string[]}
 */

const pairs = (groups) => {
  let arr = [];
  for (let key in groups) {
    arr.push(key + " & " + groups[key])
  }
  return arr;
};

/**
 * Takes in an array of films, where each film has the following
 * properites: title, director, watched (a boolean)
 *
 * Return an array where each element tells the user if they've watched the film or not.
 *
 * Exp Output:
 * [
 * 'You already watched "Wonder Woman" directed by Patty Jenkins.',
 * 'You still need to watch "Jaws" by director Steven Spielberg.'
 * ]
 *
 * @param {Object[]} films - Array of film objects.
 * @param {string} films[].director - The director of the film.
 * @param {string} films[].title - The title of the film.
 * @param {boolean} films[].watched - Whether or not the film has been watched by the user.
 * @returns {string[]} Array of sentences about films
 */
const movieList = (films, director, title, watched) => {
  let arr = [];
  for (let key in films) {
    let movie = films[key];
    if (movie.watched) {
      arr.push(`You already watched "${movie.title}" directed by ${movie.director}.`)
    } else {
      arr.push(`You still need to watch "${movie.title}" by director ${movie.director}.`)
    }

  }
  return arr;
};

/**
 * Takes in a sentence and returns the most
 * frequent word that is longer than 5 characters.
 * @param {string} sentence A sentence or passage
 * @returns {string} The most frequent word longer than 5 characters
 */

const mostFreqWordGreaterThanFive = (sentence) => {

  let arr = sentence.split(" ");
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
      if(arr[i].length>5){
        arr2.push(arr[i])
      }
  }

  let count = {}
  for(let i=0;i<arr2.length;i++){
    let element = arr2[i].toLowerCase();
    if(count[element]){
      count[element]++;
    }else{
      count[element] = 1;
    }
  }

  let max =0;
  let word = ""
  for(let key in count){
    if(count[key]>max){
      max = count[key]
      word = key
    }

  }
  return word;
};


/**
 * Takes in a sentence and a length.
 * Returns the most frequent word that is longer than the length.
 * @param {string} sentence - Sentence or passage
 * @param {number} length
 * @returns {string} The most frequent word longer than length
 */

const mostFreqWordGreaterThanLength = () => { };

/**
 * Takes in a sentence and returns the second most common letter
 * used from the English alphabet.
 * @param {string} sentence
 * @returns {string} The second most used letter.
 */

const secondMostFrequentLetter = () => { };

// Consider the following question: 
// What will the code below log?  Explain why.
// const p1 = {
//   name: 'Joe'
// }

// const p2 = {
//   name: 'Joe'
// }

// console.log(p1 === p2)

module.exports = {
  catSpecies,
  giveCatColor,
  catTexture,
  objKeys,
  objKeys2,
  objValues,
  objValues2,
  findDirectors,
  fullNames,
  largestEarner,
  pairs,
  movieList,
  mostFreqWordGreaterThanFive,
  mostFreqWordGreaterThanLength,
  secondMostFrequentLetter,
};
