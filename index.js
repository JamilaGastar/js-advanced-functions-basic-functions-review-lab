// Your code here

function saturdayFun(activity) {
    if (activity === "bathe my dog") {
        return "This Saturday, I want to bathe my dog!";
    }
        return "This Saturday, I want to roller-skate!";
}
console.log(saturdayFun());


function mondayWork(workTask) {
    if (workTask === "work from home") {
        return "This Monday, I will work from home.";
    }
        return "This Monday, I will go to the office."
}
console.log(mondayWork("work from home"));

function add() {
    return 1 + 3;
}

function subtract() {
    return 1 - 3;
}

function multiply() {
    return 1 * 3;
}

function divide() {
    return 10 / 5;
}

let Calculator = {add, subtract, multiply, divide}

console.log(add());

function wrapAdjective(character) {
    return function(phrase) {
        return `You are ${character}${phrase}${character}!`
    }
}

console.log(wrapAdjective("*")("hard worker"));

const arrayOfFunctions = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

function actionApplyer(startingValue, arrayOfFunctions) {
    let returnVal = startingValue;
    for (let i = 0; i < arrayOfFunctions.length; i++) {
        if (i === 0) {
            returnVal = arrayOfFunctions[i](startingValue);
        } else {
            returnVal = arrayOfFunctions[i](returnVal);
        }
    }
    return returnVal;
}

console.log((actionApplyer(13, arrayOfFunctions)));