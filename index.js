var input = document.getElementById('yourInput'); //input area
var buttons = document.querySelectorAll('button.number-button'); // number button
var operation = document.querySelectorAll('button.operation'); // operator button
var firstNumbers = ''; // first numbers 
var secondNumbers = ''; // second numbers
var operand = '';  // operator

function addNumbers() {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (event) {
            if (operand === '') {
                input.value += event.currentTarget.value
                firstNumbers = input.value;
            }
            else {
                input.value += event.currentTarget.value
                secondNumbers = input.value;
                secondNumbers = secondNumbers.substring(1);
            }
        })
    }
}
addNumbers();

function arithmeticOperation() {
    for (i = 0; i < operation.length; i++) {
        operation[i].addEventListener('click', function (event) {
            input.value = event.currentTarget.value
            operand = input.value;
        })
    }
}
arithmeticOperation();

function deleteInputContent() {
    input.value = '';
    firstNumbers,secondNumbers,operand = '';
}

function setOfArithmeticOperation(){
    if (operand==='+'){
        firstNumbers = parseFloat(firstNumbers) + parseFloat(secondNumbers);
    }
    else if (operand==='-') {
        firstNumbers = parseFloat(firstNumbers) - parseFloat(secondNumbers);
    }
    else if (operand==='/'){
        firstNumbers = parseFloat(firstNumbers) / parseFloat(secondNumbers);
    }
    else if (operand==='*'){
        firstNumbers = parseFloat(firstNumbers) * parseFloat(secondNumbers);
    }
    input.value=firstNumbers
}