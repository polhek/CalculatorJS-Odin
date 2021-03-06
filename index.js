// DOM elements
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const showResult = document.querySelector(".result");
const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");
const equalsKey = document.querySelector(".equals-key");
const decimalKey = document.querySelector(".decimalKey");

currentOperand.textContent = " ";
previousOperand.textContent = " ";

// Sum of a, b ...
function add(a, b) {
  return a + b;
}

// Subtraction of a and b ...
function subtract(a, b) {
  return a - b;
}

// Multiply a, b ...
function multiply(a, b) {
  return a * b;
}

// Divide a,b ...
function divide(a, b) {
  return a / b;
}

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

    // if (parseFloat(num2) === 0) {
    //   console.error("Snarky error message! You can't divide with 0...");
    // }  else {
    //   return divide(num1, num2);
    // }
  }
}

//Create the functions that populate the display when you click the
//number buttons… you should be storing the ‘display value’ in a variable somewhere
//for use in the next step.

//
let storedNumber = "";
let clickedOperator = "";
let firstNumber = "";
let temporaryNumber = "";
let result = "";
let roundedResult = "";
let equalClicked = "";
currentOperand.textContent = "0";
previousOperand.textContent = "";

numberButton.forEach((number) => {
  number.addEventListener("click", function () {
    if (equalClicked) {
      
    } else if (storedNumber.length < 15) {
      storedNumber += number.value;
      currentOperand.textContent =  storedNumber.substring(0, 17);
      previousOperand.textContent =
      firstNumber + " " + clickedOperator + " " + storedNumber;
    }
   
  });
});

operatorButton.forEach((operator) => {
  operator.addEventListener("click", function () {
    if (firstNumber && storedNumber) {
      displayResult();
    }
    if (result) {
      storedNumber = result;
    }
    firstNumber = storedNumber;
    temporaryNumber = firstNumber;
    // get the operator that was clicked
    clickedOperator = operator.textContent;
    if (storedNumber && firstNumber) {
      previousOperand.textContent = storedNumber + " " + clickedOperator;
      
    } else {
      clickedOperator = "";
    }
    storedNumber = "";
    equalClicked = "";
  });
});

equalsKey.addEventListener("click", function () {
  if (firstNumber && storedNumber) {
    displayResult();
    equalClicked = 'clicked';
    firstNumber = '';
  } else if (roundedResult) {
    result = operate(parseFloat(roundedResult), parseFloat(storedNumber), clickedOperator);
    roundedResult = Math.round(result * 10000) / 10000;
    currentOperand.textContent = roundedResult;
    temporaryNumber = parseFloat(roundedResult) + parseFloat(storedNumber);
    previousOperand.textContent =
     temporaryNumber + " " + clickedOperator + " " + storedNumber;
    equalClicked = 'clicked';
    
  } else if (parseFloat(roundedResult) === 0) {
    result = parseFloat(roundedResult) - parseFloat(storedNumber)
    roundedResult = Math.round(result * 10000) / 10000;
    currentOperand.textContent = roundedResult;
    previousOperand.textContent =
     '0' + " " + clickedOperator + " " + storedNumber;
    equalClicked = 'clicked';
  }
  
  
});

function displayResult() {
  if (parseFloat(storedNumber) === 0) {
    clearDisplay();
    alert("You can't dividide with zero");
    clickedOperator = "";
    previousOperand.textContent = "";
  } else {
    result = operate(
      parseFloat(firstNumber),
      parseFloat(storedNumber),
      clickedOperator
    );

    roundedResult = Math.round(result * 10000) / 10000;

    currentOperand.textContent = roundedResult;

    previousOperand.textContent =
      firstNumber + " " + clickedOperator + " " + storedNumber;
  }
}

clearButton.addEventListener("click", clearDisplay);

clearDisplay();

function clearDisplay() {
  storedNumber = "";
  clickedOperator = "";
  firstNumber = "";
  temporaryNumber = "";
  result = "";
  currentOperand.textContent = "0";
  previousOperand.textContent = "";
  equalClicked = "";
}

decimalKey.addEventListener("click", function () {
  if (!storedNumber.includes(".")) {
    if (!storedNumber) {
      storedNumber = 0 + "." + storedNumber;
    } else {
      storedNumber = storedNumber + ".";
      currentOperand.textContent = storedNumber;
    }
  }
});

deleteButton.addEventListener("click", deleteLastNumber);

function deleteLastNumber() {
  storedNumber = storedNumber.slice(0, -1);
  currentOperand.textContent = storedNumber;
  previousOperand.textContent = firstNumber + " " + clickedOperator + " " + storedNumber;
}


window.addEventListener("keydown", (e) => {
  let keypressed = e.keyCode;
  if (keypressed >= 48 && keypressed <= 57) {
    document.querySelector(`.number[data-key="${e.keyCode}"]`).click();
  }
  if (keypressed === 13) {
    equalsKey.click();
  }
  if (keypressed === 8) {
    deleteButton.click();
  }
  if (keypressed === 190) {
    document.querySelector(`.decimalKey[data-key="${e.keyCode}"]`).click();
  }
  if (keypressed === 191) {
    document.querySelector(`.operator[data-key="${e.keyCode}"]`).click();
  }
  if (keypressed === 173) {
    document.querySelector(`.operator[data-key="${e.keyCode}"]`).click();
  }
  if (keypressed === 171 && e.key === "+") {
    document.querySelector(`.operator[data-key="${e.keyCode}"]`).click();
  }
  if (keypressed === 171 && e.key === "*") {
    document.querySelector(`.operator[data-key="${e.keyCode}"]`).click();
  }
  if (keypressed === 32) {
    clearButton.click();
  }
});

