
let currentDisplayString = "0";
let previousDisplayString = "0";
let possibleString = false;

displayC = document.getElementById("displayCurrent");
displayP = document.getElementById("displayPrevious");

// AddOperandToCurrentStrings will add operands to a current display formula.
function addOperandToCurrentString( newOperand ) {

    // Add the operand to what's already in the current display.
    currentDisplayString = currentDisplayString + newOperand;

    // If the numbers were the result of a previous calculation, stop checking if the result is being used.
    if(possibleString) {
        possibleString = false;
    }

    displayC.innerHTML = currentDisplayString;
}

// AddToCurrentString will add string to an equation.
function addToCurrentString( newString ) {

    // If the current value is 0 make the display only the inputted button, make the display only have the input.
    if ((possibleString === true) || (currentDisplayString === "0")) {
        currentDisplayString = newString;
        possibleString = false;
    }

    // Otherwise, set the value of currentString to be the one from before plus the new input.
    else {
        currentDisplayString = currentDisplayString + newString;
    }

    displayC.innerHTML = currentDisplayString;
}

// ClearCurrenString() will completely remove the current calculation.
function clearCurrentString () {
    currentDisplayString = "";

    displayC.innerHTML = currentDisplayString;
}

// DeleteCurrentString() will remove the last added item from a calculation.
function deleteCurrentString() {
    let strLen = currentDisplayString.length;
    currentDisplayString = currentDisplayString.substring(0, strLen - 1);

    displayC.innerHTML = currentDisplayString;
}

// Calculate() will take in the current displaying string and calculate an answer.
function calculate() {

    // finalCalc will represent the final calculated value.
    let finalCalc;

    // Try to get a value from our currently displaying equation.
    try {
        finalCalc = eval(currentDisplayString);

        // If division by 0 occurred, make the answer "N/A" and set the current string back to 0.
        if (finalCalc === Infinity) {
            previousDisplayString = currentDisplayString + " = N/A";
            currentDisplayString = "0";
        }

        // If any other failures occured in calculating, make the answer "N/A" and set the current string back to 0.
        else if (isNaN(finalCalc)) {
            previousDisplayString = currentDisplayString + " = N/A";
            currentDisplayString = "0";
        }

        // Otherwise, if the calculation is successful, display the equation and answer in previous display string, and
        //  make the current display be the final calculation. Also make sure to make possibleString true to check
        //  if the next equation will use the previously calculated value.
        else {
            previousDisplayString = currentDisplayString + " = " + finalCalc;
            currentDisplayString = finalCalc;
            possibleString = true;
        }

    // If calculating the equation results in an error, make the answer "N/A" and set the current string back to 0.
    } catch (error) {
        previousDisplayString = currentDisplayString + " = N/A";
        currentDisplayString = "0";
    }

    displayP.innerHTML = previousDisplayString;
    displayC.innerHTML = currentDisplayString;
}

displayP.innerHTML = previousDisplayString;
displayC.innerHTML = currentDisplayString;