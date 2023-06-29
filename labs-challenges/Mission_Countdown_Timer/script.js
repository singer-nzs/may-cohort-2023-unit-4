let startTimeout = document.getElementById('start-timeout');
let timeoutDisplay = document.getElementById('timeout-display');
let startInterval = document.getElementById('start-interval');
let intervalDisplay = document.getElementById('interval-display');
let count = 5;

startTimeout.addEventListener('click', callBack);

startInterval.addEventListener('click', callBackTwo);

function callBack() {
    timeoutDisplay.textContent = "Getting Ready";
    setTimeout(() => {
        timeoutDisplay.textContent = "READY"
    }, 5000);
};


function callBackTwo() {
    let x = setInterval(() => {
        intervalTimer();
    }, 1000);
    function intervalTimer() {
        intervalDisplay.textContent = count--;
        if(count == 0) {
            intervalDisplay.textContent = "GO!"
            clearInterval(x)
        };
    };
};