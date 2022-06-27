var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = (document.getElementsByTagName("li").length);
console.log('Total:' + currentNumber);
currentNumberWrapper.innerHTML = currentNumber;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor();
}

function reset() {
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor();
}

function changeColor() {
    if (currentNumber > 0) {
        currentNumberWrapper.style.color = 'aqua';
    }
    else if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
    else {
        currentNumberWrapper.style.color = 'black';
    }
}

/* ------------------------ TO DO LIST---------------------------- */
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.id = i;
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        decrement();
    }
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function novoItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Você deve digitar alguma coisa!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            decrement();
        }
    }
}

var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", increment, false);
