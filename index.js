// DOM elements 
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete')
const showResult = document.querySelector('.result');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const equalsKey = document.querySelector('.equals-key');

currentOperand.textContent = ' ';
previousOperand.textContent = ' ';

// Sum of a, b ... 
function add(a, b) {
    return a + b;
};

// Subtraction of a and b ...
function subtract(a, b) {
    return a - b;
};

// Multiply a, b ... 
function multiply(a,b) {
    return a * b;
};


// Divide a,b ... 
function divide(a,b) {
    return a / b;
};


// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(num1, num2, operator) {
    switch (operator) {
        case "+": 
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2); 
    }
};


//Create the functions that populate the display when you click the 
//number buttons… you should be storing the ‘display value’ in a variable somewhere 
//for use in the next step.

let storedNumber = '';
let clickedOperator = ''
let firstNumber = '';

numberButton.forEach((number) => {
    number.addEventListener('click', function() {
        storedNumber += number.value;
        currentOperand.textContent = storedNumber;   
    })
});


operatorButton.forEach((operator) => {
    operator.addEventListener('click', function() {
        let firstNumber = storedNumber;
        clickedOperator = operator.textContent;
        currentOperand.textContent = firstNumber + clickedOperator;
        console.log(clickedOperator);
    })
}) 


equalsKey.addEventListener('click', function() {
    let result = '';
    result = operate(Number(firstNumber), Number(storedNumber), clickedOperator);
    console.log(result)
})




