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
      // Create a function to safely evaluate the expression
      const result = new Function('return ' + currentInput)();
      
      // If the result is undefined or not a valid number, show error
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
