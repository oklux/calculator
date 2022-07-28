function add(a, b){
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    if (op === "+") return add(a, b);
    if (op === "-") return subtract(a, b);
    if (op === "*") return multiply(a, b);
    if (op === "/") return divide(a, b);
    else return "ERROR";
}

const numBtns = document.querySelectorAll('.numbutton');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const numOne = document.getElementById('btn1');
numOne.textContent = 1;
const numTwo = document.getElementById('btn2');
numTwo.textContent = 2;
const numThree = document.getElementById('btn3');
numThree.textContent = 3;
const numFour = document.getElementById('btn4');
numFour.textContent = 4;
const numFive = document.getElementById('btn5');
numFive.textContent = 5;
const numSix = document.getElementById('btn6');
numSix.textContent = 6;
const numSeven = document.getElementById('btn7');
numSeven.textContent = 7;
const numEight = document.getElementById('btn8');
numEight.textContent = 8;
const numNine = document.getElementById('btn9');
numNine.textContent = 9;
const numZero = document.getElementById('btn0');
numZero.textContent = 0;

let displayValue = '';

clear.addEventListener('click', () => {
    displayValue = '';
    display.textContent = displayValue;
})

numBtns.forEach(e => {
    e.addEventListener('click', () => {
    if (displayValue.length > 9) return;
    displayValue += e.textContent;
    display.textContent = displayValue;
})
});
