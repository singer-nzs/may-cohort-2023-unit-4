//TODO: Global Variables
const form = document.getElementsByTagName('form');
const table = document.querySelector('tbody');
let animals = [];
// console.log(form.name);
//console.log(Object.values(form));
//console.log(form.name.placeholder);
//console.log(form[0].placeholder);

//TODO: Event Listeners
form.addEventListener("submit", e => {
    e.preventDefault(); // stops the default refresh of the form.
    //console.log(e);

    const animal = {
        name: form.name.value,
        sex: form.sex.value,
        species: form.species.value,
    }

    animals.push(animal);
    //console.log(animals);
    form.reset(); //points to our form and clears it.
    form[0].focus(); //targets the first input within the form when it is "new"
    //* alt: form.species.focus();
});

// form.name.addEventListener('keyup', () => {
    // console.log(form.name.value)
//})

//TODO: Display to Table (function)