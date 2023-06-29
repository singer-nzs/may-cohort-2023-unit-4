/* 
!   API
    - Application Programming Interface
    - Client (front end) to communicate with the server (database)
    - Allows HTTP request and response lifecycle

*   AJAX
    - Asychronous JavaScript and XML
    - Wraps XML with XMLHttpRequest -> not important to know right now.
    - Governs different aspects of our page, such as static vs dynamic sections of the page.

*   jQuery
    - A library that helps us handle the front end, prior to DOM and fetch.
    - still used but dated.

    AJAX examples:
        - Timed updates like comments (think of replies to posts or messages)
        - Infinite scrolling.
        PROs:
            - Page components load individually.
            - New data updates regularly.
        CONs:
            - JS must be enabled
            - Add more complexity
            - refreshes the page state and stores info can bloat.
            - Difficult for screen readers

    - Not Promised based
*/
/* 
!   Fetch
    - Before fetch(), we would have to use an httpRequest through the above process.

    - Is an API
    - Its a method that requires 1 argument.
        - The location we are trying to obtain data from.
    - Handles the request and response
    - Returns a promise
        - Allows us access to resolvers (.then(), .catch())
*/

const testEndpoint = "https://jsonplaceholder.typicode.com/posts/1";
//console.log(fetch(testEndpoint));

fetch(testEndpoint)
    //.then(response => console.log(response)) //object is returned
    //.then(response => console.log(response.url)) //url is returned
    //.then(response => console.log(response.body))
    //.then(response => console.log(response.json())) //String is returned, we create a json out of it.

    /* 
    *   JSON
            - JavaScript Object Notation
                - Very lightweight for storing and transferring data
                - "easy to understand"

        Syntax:
        {
            "key":"value",
            "key": true,
            "key": 0,
        }

        - Everything is wrapped in quotes with some minor exceptions: integers & booleans.
        - Data is all separated by a comma
        - Cannot hold comments or functions.
    */
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.body)
    });

    // JSON.parse(string)
    let myText = '{ "name": "Gollum", "lost_ring": true }';
    console.log(myText)
    // console.log(myText.name) // is a string
    let newJSON = JSON.parse(myText);
    console.log(newJSON.name); // is a JSON
    

    //* Fetching with Functions
    const btn = document.getElementById('cats');
    const url = 'https://meowfacts.herokuapp.com/';

    btn.addEventListener('click', getCatFact);

    /*   function getCatFact() {
        fetch(url)
            .then(res => res.json())
            .then(d => {
                console.log(d.data[0]);
            })
    } */

const getCatFact = async () => {
    let res = await fetch(url);
    let results = await res.json();
    let data = results.data[0];
    console.log(data);
}

btn.addEventListener('click', getCatFact);

//* Local Fetch
fetch('./local.json') // passing in our file location
    .then(res => res.json())
    .then(data => {
        let members = data.felowship;
        //console.log(members);

        for(member of members) {
            //console.log(member)

            const div = document.createElement('div')
            const h1 = document.createElement('h1');
            const h3 = document.createElement('h3');

            h1.textContent = member.name;
            h3.textContent - member.race;
            
            div.appendChild(h1);
            div.appendChild(h3);
            lotr.appendChild(div);
        }

    });

//* Error Handling

const cats2 = document.getElementById('cats2');

async function getCatFactsAgain() {

    try {
        let res = await fetch(url);
        let results = await res.json();
        let data = results.data[0];

        console.log(`Cat Facts: ${data}`);

    } catch (error) {

    }

}

cats2.addEventListener('click', getCatFactsAgain);

//? Using resolvers
fetch(url)
    .then(res => res.json())
    .then(info => console.log('Resolver: ', info.data[0]))
    .catch(err => console.error(err));

