let inputA = document.getElementById("numA");
let inputB = document.getElementById("numB");
let result = document.getElementById("result");
// for the type input we have to use the .value instead of .innerText or textContent otherwise nothing new basics..basics.

function add() {
  let firstNum = parseInt(inputA.value);
  let secondNum = parseInt(inputB.value);
  let added = firstNum + secondNum;

  result.textContent = parseInt(added);
}

function multiply() {
    let firstNumber = parseInt(inputA.value);
    let secondNumber = parseInt(inputB.value);
    let multiply = firstNumber * secondNumber;
    result.textContent = parseInt(multiply);
}

function divide() {
    let firstNumb = parseInt(inputA.value);
    let seconNumb = parseInt(inputB.value);
    let division = firstNumb / seconNumb;
    result.textContent = parseInt(division);
} 

function substract() {
    let firstN = parseInt(inputA.value);
    let secN = parseInt(inputB.value);
    // if(firstN < secN ) {

    // }
    let substraction = firstN - secN ;
    result.textContent = parseInt(substraction);
}
