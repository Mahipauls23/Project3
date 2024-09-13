let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

// function calculate() {
//   try {
//     currentInput = eval(currentInput).toString();
//     updateDisplay();
//   } catch {
//     currentInput = 'Error';
//     updateDisplay();
//   }
// }

function calculate() {
    try {
      const result = new Function('return ' + currentInput)();
      
      if (isNaN(result) || result === undefined) {
        throw new Error();
      }
  
      currentInput = result.toString();
    } catch (error) {
      currentInput = 'Error';
    }
    updateDisplay();
  }
  

function updateDisplay() {
  document.getElementById('result').value = currentInput;
}
