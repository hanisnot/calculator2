const display = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      inputNumber(button.innerText);
    } else if (button.classList.contains('operator')) {
      inputOperator(button.innerText);
    } else if (button.classList.contains('equals')) {
      calculate();
    } else if (button.innerText === 'C') {
      clear();
    } else if (
} else if (button.innerText === '+/-') {
toggleSign();
} else if (button.innerText === '%') {
inputPercent();
}
updateDisplay();
});
});

let firstOperand = null;
let operator = null;
let secondOperand = null;
let shouldReset = false;

function inputNumber(number) {
if (shouldReset) {
clear();
}
if (display.innerText === '0') {
display.innerText = number;
} else {
display.innerText += number;
}
}

function inputOperator(op) {
if (operator !== null) {
calculate();
}
firstOperand = parseFloat(display.innerText);
operator = op;
shouldReset = true;
}

function calculate() {
if (operator === null || shouldReset) {
return;
}
secondOperand = parseFloat(display.innerText);
let result;
switch (operator) {
case '+':
result = firstOperand + secondOperand;
break;
case '-':
result = firstOperand - secondOperand;
break;
case 'x':
result = firstOperand * secondOperand;
break;
case '÷':
result = firstOperand / secondOperand;
break;
}
display.innerText = result;
firstOperand = result;
operator = null;
shouldReset = true;
}

function clear() {
display.innerText = '0';
firstOperand = null;
operator = null;
secondOperand = null;
shouldReset = false;
}

function toggleSign() {
display.innerText = -parseFloat(display.innerText);
}

function inputPercent() {
display.innerText = parseFloat(display.innerText) / 100;
}

function updateDisplay() {
const displayValue = parseFloat(display.innerText).toLocaleString(undefined, { maximumFractionDigits: 6 });
display.innerText = displayValue;
}
