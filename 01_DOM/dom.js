/* 
!   DOM
    - Document Object Model
    - Only through the browser

    Frame:
        - Document: HTML page
            - Is a global variable
        - Object: Elements and comments (nodes)
        - Model: Arrangement

    - Data representation of objects that comprise the structure and content of a document on the web.

    Basic Structure:
        - HTML
            - Head
                - Meta
                - Links
                - Title
            - Body
                - Nav
                - Header
                - Divs, etc.

!   BOM
        - Browser Object Model
        - Window variable that we can access
        - various methods available.
*/

function askForStuff() {
    prompt();
}

// askForStuff();
// console.log(document);
// console.log(document.URL);
// console.log(document.location);
// console.log(document.title);
document.title = "DOM Lesson Updated"

//* Creating Elements
let h1 = document.createElement('h1');
// console.log(h1);
/* 
    Our variable now has access to our various properties (within the H1 element)
        - innerHTML: can inject a block of HTML
        - innerText: returns the visible text contained in a node (element)
        - textContent: returns the full text
            ex:
                <p>Hello <b>World</b></p>
                ~ innerText would return just "Hello"
                ~ textContent would return "Hello World"
*/

h1.innerText = "Creating my first DOM element";
// console.log(h1);
/* 
*   Chain of Events:
    1. Create our element (or check if exists)
    2. Apply our value
    3. Place our element
*/

//* Append Child
// console.log(document.body);
document.body.appendChild(h1);
// console.log(document.body.children[2]);
h1.style.color = 'blue';
// console.log(document.body.children);
h1.style.textAlign = 'center';
h1.style = `
    color: blue;
    text-align: center;
    text-shadow: 2px 2px 2px yellow;
    `;
h1.className = "h1-class-name"; // JS requires camelCasing as "class" is a keyword within JavaScript.
h1.id = 'set-id';
console.log(h1);

//* Finding Elements
/* 
! HTMLCollection
    - An array-like object
    - Allows access to index, properties, and methods to help navigate and modify.
    - Does NOT allow to modify a group of elements.
    - Can loop through it.
    - Can use .length property to get the size of the list.

    How to Get an Element
    - use array notation

    Access Multiple Element requires these methods:
    - getElementsByTagName()
    - querySelectorAll()
    - getElementsByClassName()
*/

let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);
let bathroom = li[0];
bathroom.style.color = 'red';

// li.style.color = 'green'; // doesn't work
for(i of li) {
    // console.log(i);
    i.style.color = 'white';
}

/* 
* .querySelector()
    - Grabs frist instance of an element or null if nothing is found.
    - can target by ID, Class, or Element
        - will need to append # for ID
        - will need to append . for Class
*/

let firstLi = document.querySelector('li');
// console.log(firstLi);

// let toDoList = document.querySelector('#listTitle');
// console.log("ID select: ", toDoList);
// toDoList.style.textAlign = 'center';
document.querySelector('#listTitle').style.textAlign = 'center';

/* 
* .querySelectorAll()
    - Returns a static nodeList (an array) list of elements.
    * static: will not update
*/

let nodeListLi = document.querySelectorAll('li');
// console.log(nodeListLi);
//? static example
let newLi = document.createElement('li');
let ul = document.getElementById('ulToDo');
newLi.innerText = "New item"
ul.appendChild(newLi);
// console.log(li);

/* 
* .getElementsByClassName()
*/
let liClass = document.getElementsByClassName('listItem');
// console.log('-----------------')
// console.log(liClass);

/* 
! Event Listeners
    .addEventLister()
        - DOM node method
        - requires an event to "listen for" and a callback function (arguments)

    ex:
        node.addEventListener('click', CB)
*/

let btn = document.getElementById('submit');
// console.log(btn);

// btn.addEventListener("click", (event) => {
//     // console.log(event);
//     console.log('Someone clicked the button')
// });

/* 
* Process of Manipulating our DOM
    - Capture data
    - Access parent element
    - Create element
    - Assign value to newly created element
    - Append our newly created element to parent
*/

let input = document.getElementById('listInput');

btn.addEventListener('click', addItem);

function addItem() {
    // console.log(input.value);
    let newItem = document.createElement('li');
    newItem.textContent = input.value; // pulled from the value property of the input field element.
    newItem.style = `
        color: blue;
    `;

    ul.appendChild(newItem);
    input.value = '';
}

//! ---------------------------------
// Global variable
let buildBtn = document.getElementById('table-btn');
let shellDiv = document.getElementById('shell-div');
// mock data
const myList = [
    'red', 'blue', 'green', 'purple', 'yellow', 'orange'
];

// Event Listener
buildBtn.addEventListener('click', buildTable);

// Function to build and display elements
function buildTable() {

    myList.forEach((color, i) => {
        // create elements
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');

        // assign value to properties
        h2.textContent = color;
        h2.style.color = color;
        p.innerHTML = `
            Item <u><b>${i}</b></u> in my list
        `;

        // set to parent element
        div.appendChild(h2);
        div.appendChild(p);
        shellDiv.appendChild(div);
    });

    shellDiv.style = `
        display: flex;
        align-items: space-around;
    `

}