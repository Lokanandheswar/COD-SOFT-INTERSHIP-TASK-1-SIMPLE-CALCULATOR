const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            updateDisplay();
        } else if (value === '=') {
            if (operator && currentInput !== '') {
                calculate();
            }
        } else if (value === '.') {
            if (!currentInput.includes('.')) {
                currentInput += value;
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (previousInput !== '') {
                calculate();
            }
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            currentInput += value;
        }

        updateDisplay();
    });
});

function updateDisplay() {
    display.value = currentInput || previousInput;
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
    }
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
}
