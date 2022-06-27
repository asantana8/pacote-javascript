var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor()
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor()
}

function reset() {
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor()
}

function changeColor() {
    if (currentNumber > 0) {
        currentNumberWrapper.style.color = 'blue';
    }
    else if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
    else {
        currentNumberWrapper.style.color = 'black';
    }
}

// add event listener to t  
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");
var res = document.getElementById("reset");
inc.addEventListener("click", increment, false);
dec.addEventListener("click", decrement, false);
res.addEventListener("click", reset, false);