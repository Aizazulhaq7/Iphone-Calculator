
let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".value");

let currentValue = "";
let previousValue = "";
let operator = "";

function updateDisplay(value) {
  display.textContent = value;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let buttonText = e.target.textContent;
    if (!isNaN(buttonText) || buttonText === ".") {
      currentValue += buttonText;
      updateDisplay(currentValue);
    } else if (buttonText === "AC") {
      currentValue = "";
      previousValue = "";
      operator = "";
      updateDisplay("0");
    } else if (buttonText === "=") {
      if (operator && previousValue) {
        currentValue = calculate(previousValue, currentValue, operator);
        updateDisplay(currentValue);
        operator = "";
        previousValue = "";
      }
    } else {
      if (currentValue) {
        if (previousValue && operator) {
          currentValue = calculate(previousValue, currentValue, operator);
          updateDisplay(currentValue);
        }
        previousValue = currentValue;
        currentValue = "";
        operator = buttonText;
      }
    }
  });
});

// Function to perform calculations
function calculate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "+":
      return a + b;
    case "−":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return a / b;
    default:
      return b;
  }
}
