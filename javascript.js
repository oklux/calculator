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