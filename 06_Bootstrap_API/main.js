import apiKey from './key';
//! Global Variables
const baseURL = `https://api.spoonacular.com/recipes/random`;
// const key = ?apiKey=${apiKey};
// const tag = `eggs`
// sample url: 
// https://api.spoonacular.com/recipes/random?apiKey=YOUR-API-KEY-VALUE
let buildURL = `${baseURL}?apiKey=${apiKey}`;
// let searchRandom = `${baseURL}?apiKey=${apiKey}&tags=${tag}`;
// let buildURL2 = `${baseURL}${key}&tags=${tag}`; // option to build URL

// console.log(apiKey)

// fetch(baseURL)
// fetch(buildURL)
fetch(buildURL)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
