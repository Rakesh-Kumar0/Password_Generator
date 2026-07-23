// set the initial value of 10 with the input id is "textInput"
document.getElementById("textInput").value = 10;

// Function to update the input field value based on the range input
function updateTextInput(val){
    document.getElementById("textInput").value = val;
    generateNewPassword(); // Generate a new password whenever the  input value changes
}

// Function to update the range input value based on the input field
function updateRangeInput(val){
    document.getElementById("rangeInput").value = val;
    generateNewPassword(); // Generate a new password whenever the range input value changes
}

// Function to generate a new password based on user preferences
function generateNewPassword(){
    const length = parseInt(document.getElementById("textInput").value);
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;
}

// Define character sets for password generation
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numbesChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';


