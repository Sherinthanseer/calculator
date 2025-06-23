let currentInput = '';
let currentOperation = '';
let previousInput = '';

function read(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                reset();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    updateDisplay();
}

function reset() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

function floatNum() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value =
        `${previousInput} ${currentOperation} ${currentInput}`.trim();
}

function deleteLast() {
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1);
    } else if (currentOperation !== '') {
        currentOperation = '';
        currentInput = previousInput;
        previousInput = '';
    }
    updateDisplay();
}
