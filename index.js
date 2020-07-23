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
function multiply(a, b) {
    return a * b;
};


// Divide a,b ... 
function divide(a, b) {
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
let result = '';
currentOperand.textContent = 0;


if (parseFloat(storedNumber) > 0 && parseFloat(firstNumber) > 0 && clickedOperator.length > 0) {
    result = operate(parseFloat(storedNumber), parseFloat(firstNumber), clickedOperator);
    console.log('This ' + result);
}

numberButton.forEach((number) => {
    number.addEventListener('click', function() {
        storedNumber += number.value;
        currentOperand.textContent = storedNumber;   
    })
});


operatorButton.forEach((operator => {
    operator.addEventListener('click', function() {
        
        // save the first number
        firstNumber = storedNumber;
        
        // get the operator that was clicked
        clickedOperator = operator.textContent;
        previousOperand.textContent = storedNumber + clickedOperator;
        storedNumber = '';
        
        console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber)
        console.log(clickedOperator);
        
    })
}));

equalsKey.addEventListener('click', function() {
    // when equals key is clicked call operate() function
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
    // update content of current operation with result and previous operand with the calculation, make storedNumber = result
    currentOperand.textContent = result;
    previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
    storedNumber = result;
    console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber)
})








