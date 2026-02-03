const display = document.getElementById("display");

// Append number/operator
function append(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
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
    } catch {
        display.value = "Error";
    }
}

// Percentage
function percentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch {
        display.value = "Error";
    }
}

// Power function
function power() {
    display.value += "^";
}

// Square root
function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = "Error";
    }
}
