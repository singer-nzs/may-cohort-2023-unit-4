/* 
!   Promise
    Is an object that may produce a singluar value in the future.

    3 states:
        - pending
        - fulfilled
        - rejected

    Takes in two parameters:
        - Resolve
        - Reject

    Always returns an object
*/

/* function getData() {
    setTimeout( () => {
        return "some data";
    }, 3000);
}

let data = getData(); // the value comes "late" - 3 seconds
console.log(data); // We get an undefined because the info is delayed when compiled. */

//* Callback - functions that get executed after the end of a process.
function getData(cb) {
    setTimeout( () => {
        cb("some data");
    }, 3000);
}

getData(data => console.log(data));
getData(data => {
    let newString = data + "and more data...";
    console.log(newString);
});

/* 
* A promise is an object that produces a singluar value in the future.

    - Resolved
    - Rejected
        - These detail what to do depending on the results.
*/

function returnData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(true) {
                    resolve('some data from Promise');
                } else {
                    reject('This is rejected');
                }
            }, 2000);
        })

}

// console.log(returnData());

/* 
    - When returned, the returnData() func. will give us a string instead of a Promise Object.

    - Chained with a resolver
        - Keyword:
            - .then() - if successful
                - can be chained together
            - .catch() - if there is an error
            - Take in CB functions
            - note: only put semicolon (;) after the LAST resolver.
*/
returnData()
    .then(data => console.log("From Response: ", data))
    .then(num => console.log('from second .then()'))
    .catch(function(err) {
        console.log(err); // provides our rejection results
    });

    /* 
    The Process:
        - Creating a new Promise.
            - resolve / reject are parameters of a cb function.
        - setTimeout acting as our "waiting" for a response.
        - resolve() or reject() said promise
        - When returned, returns a promise - not a string
        - use of resolvers (.then() / .catch()) with cb function to help extrapolate the info from that promise.
    */