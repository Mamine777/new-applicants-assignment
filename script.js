function AddToDisplay(value) {                           // This function is called when we click on any button except "=" or "C"
    document.getElementById('display').value += value;  // adding value of the clicked button to display
}
function ClearDisplay() {                             // This function is called when we click on "C" button
    document.getElementById('display').value = '';   // Resetting the display
}

function CalculateResult() {                      // This function is called when the "=" button is clicked
    try {

        let result = eval(document.getElementById('display').value); // Evaluate the expression on the display
        if (result === Infinity || result === -Infinity) {          // Check if the result is positive or negative infinity
            document.getElementById('display').value = 'ERROR';    // Set the display to 'ERROR' for infinity
        } else {
            document.getElementById('display').value = result;   // Update the display with the result
        }
    } catch (error) {
        document.getElementById('display').value = 'ERROR';   // If an error occurs during calculation, display 'ERROR'
    }


}
    
function deleteLastElement() {                          // Define a function called deleteLastElement
    var display = document.getElementById("display");  // Get the element with the id "display" (assuming it's an input field)
    var currentValue = display.value;                 // Get the current value of the display
    if (currentValue.length > 0) {                   // Check if the current value is not empty
        display.value = currentValue.slice(0, -1);  // Remove the last character from the current value
    if (currentValue ==='ERROR') {
    display.value = '';
    } 

    }

}


