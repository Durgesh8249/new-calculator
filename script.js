const display = document.getElementById("display");
let justCalculated = false; // true ho jaayega calculation ke baad

// Append number/operator
function append(value) {
    const operators = ['+', '-', '*', '/', '^'];
    const lastChar = display.value.slice(-1);

    // Agar abhi calculation hua hai
    if (justCalculated) {
        if (!operators.includes(value)) {
            // Number type hua → purana result replace ho jaaye
            display.value = "";
        }
        justCalculated = false;
    }

    // Prevent consecutive operators
    if (operators.includes(value) && operators.includes(lastChar)) {
        return; // ignore
    }

    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
    justCalculated = false;
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        let expression = display.value.replace(/\^/g, "**");
        display.value = eval(expression);
        justCalculated = true; // flag set
    } catch {
        display.value = "Error";
        justCalculated = true;
    }
}

// Percentage
function percentage() {
    try {
        display.value = eval(display.value) / 100;
        justCalculated = true;
    } catch {
        display.value = "Error";
        justCalculated = true;
    }
}

// Power function
function power() {
    append("^"); // append ke through check ho jayega
}

// Square root
function sqrt() {
    try {
        let result = Math.sqrt(eval(display.value));
        display.value = isNaN(result) ? "Error" : result;
        justCalculated = true;
    } catch {
        display.value = "Error";
        justCalculated = true;
    }
}
