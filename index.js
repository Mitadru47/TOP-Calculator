var output = document.querySelector(".output");

var operators = document.querySelector(".operators");
var numbers = document.querySelector(".numbers");

var calculate = document.querySelector("#calculate");
var clear = document.querySelector("#clear");

var temp = 0;

for(let i=0; i<10; i++){

    var expression = document.createElement("div");
    expression.classList.add("number");

    expression.textContent = (temp++);
    numbers.appendChild(expression);
}

function add(a, b){
    return (a + b);
}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b){
    return (a * b);
}

function divide(a, b){

    if((a!==0) && (b === 0))
        return "To infinity & beyond...";

    return (Math.round((a / b) * 100))/100;
}

function operate(){

    var result = "";
    switch(operator){

        case "+":
            result = add(Number(operand1), Number(operand2));
            break;

        case "-":
            result = subtract(Number(operand1), Number(operand2));
            break;

        case "*":
             result = multiply(Number(operand1), Number(operand2));
            break;

        case "/":
            result = divide(Number(operand1), Number(operand2));
            break;
    }

    return result.toString();
}

var operand1 = "";
var operand2 = "";

var operator = "";
var expression = "";

numbers.addEventListener("click", (event) => {

    if(event.target.innerText.length < 2){

        expression += event.target.innerText;
        output.textContent = expression;
    }

}, true);

operators.addEventListener("click", (event) => {

    if(event.target.innerText.length < 2){
        
        if(operator === ""){
        
            operand1 = expression;
            operator = event.target.innerText;

            expression = expression + " " + operator + " ";
            output.textContent = expression;
        
        } else {

            operand2 = (expression.substring((operand1.length + 3)));

            if(((operand1 === "") && (operand2 === "")) || (operand1 === "") || (operand2 === "")){
                expression = "Try Again..";
        
            } else {
                expression = operate();
            }

            if((expression === "To infinity & beyond...") || (expression === "Try Again..")){

                output.textContent = expression;
               
                operand1 = "";
                operand2 = "";

                operator = "";
                expression = "";

            } else {

                operand1 = expression;
                operand2 = "";
                
                operator = event.target.innerText;

                expression = expression + " " + operator + " ";
                output.textContent = expression;
            }
        }
    }
    
}, true);

calculate.addEventListener("click", () => {

    operand2 = (expression.substring((operand1.length + 3)));

    if(((operand1 === "") && (operand2 === "")) || (operand1 === "") || (operand2 === "")){
        expression = "Try Again..";

    } else {
        expression = operate();
    }

    output.innerText = expression;

    if((expression === "To infinity & beyond...") || (expression === "Try Again..")){

        operand1 = "";
        operand2 = "";

        operator = "";
        expression = "";

    } else {

        operand1 = expression;
        operand2 = "";

        operator = "";
    }

}, true);

clear.addEventListener("click", () => {

    operand1 = "";
    operand2 = "";

    operator = "";
    expression = "";

    output.innerText = expression;

}, true);