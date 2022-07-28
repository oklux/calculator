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
    if (op === "x") return multiply(a, b);
    if (op === "÷") {
        if (b === "0") return "bro?";
        return divide(a, b);
    }
    else return "ERROR";
}

const numBtns = document.querySelectorAll('.numbutton');
const operators = document.querySelectorAll('.opbutton');
const display = document.querySelector('.display');

const clear = document.querySelector('.clear');
const equal = document.querySelector('.equals')

// operators
const opeAdd = document.getElementById('addbtn');
opeAdd.textContent = "+";
const opeSubtract = document.getElementById('subtractbtn');
opeSubtract.textContent = "-";
const opeMultiply = document.getElementById('multiplybtn');
opeMultiply.textContent = "x";
const opeDivide = document.getElementById('dividebtn');
opeDivide.textContent = "÷";

// numbers
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
let prevValue = '';
let operatorMode = false;
let currentOpe = '';

clear.addEventListener('click', () => {
    displayValue = '';
    display.textContent = displayValue;
    prevValue = '';
    operatorMode = false;
    currentOpe = '';
})

numBtns.forEach(e => {
    e.addEventListener('click', () => {
    if (displayValue.length > 9) return;
    if (!currentOpe === '') {
        displayValue = e.textContent;
        display.textContent = displayValue;
        return;
    }
    displayValue += e.textContent;
    display.textContent = displayValue;
})
});

function equalFunc() {
    if (currentOpe === '') return;
    console.log(currentOpe);
    let temp = operate(currentOpe, prevValue, displayValue);
    prevValue = displayValue;
    display.textContent = temp;
    currentOpe = '';
}

equal.addEventListener('click', () => {
    equalFunc();
    operatorMode = false;
})


operators.forEach(e => {
    e.addEventListener('click', () => {
        if (operatorMode === true) {
            equalFunc();
        }
        displayValue = display.textContent;
        prevValue = displayValue;
        displayValue  = '';
        currentOpe = e.textContent;
        operatorMode = true;
        console.log(currentOpe);
    })
})


// operators.forEach(e => {
//     e.addEventListener('click', () => {
//         if (operatorMode === true) {
//             displayValue = operate(currentOpe,displayValue,prevValue)
//             display.textContent = displayValue;
//             operatorMode = false;
//         }
//         operatorMode = true;
//         currentOpe = e.textContent
//     })
// })
