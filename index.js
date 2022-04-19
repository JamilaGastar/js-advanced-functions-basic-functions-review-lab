// Your code here

function saturdayFun(activity) {
    switch (activity) {
        case "bathe my dog": return "This Saturday, I want to bathe my dog!";
        default: return "This Saturday, I want to roller-skate!";
    }
}

console.log(saturdayFun("bathe my dog"));

function mondayWork(workTask) {
    switch (workTask) {
        case "work from home": return "This Monday, I will work from home."; 
        default: return "This Monday, I will go to the office."
    }
}

console.log(mondayWork());


function wrapAdjective() {
    let part1 = 'You are'
    return function() {
        let part2 = 'a hard worker'
        return function() {
        console.log(`${part1} ${part2}`);
    }
}
}

console.log(wrapAdjective());

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

function actionApplyer() {

}
