console.log(sayHello());

function sayHello(name = "world"){
    return "Hello " + name
}

var add = function(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
var mulitply = (firstNumber, secondNumber) => firstNumber * secondNumber
console.log(mulitply(10,10));