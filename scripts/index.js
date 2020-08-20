// const display = document.getElementById("input");
// const numKeys = document.querySelectorAll(".number")
// const opKeys = document.querySelectorAll(".operator")

// console.log(numKeys);
// console.log(opKeys);

// const displayArr = [];

// numKeys.forEach(function (element) {
//     element.addEventListener('click', function (event) {
//         const target = event.target;
//         displayArr.push(target.innerHTML);
//         console.log(displayArr);
//     }
// )});
// displayArr.forEach(function (item) {
//     display.value += item;
// })


// Luke
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear')
const decimal = document.querySelector('#decimal')
let inputArr = [];
let displayCurrent = document.querySelector('.input');
let displayPrevious = document.querySelector('.previous-number');

numbers.forEach(function(number) {
    number.addEventListener('click', function(event) {
        event.preventDefault();
        inputArr.push(number.innerHTML);
        console.log(inputArr)
        displayCurrent.innerHTML += number.innerHTML;
    })
})

operators.forEach(function(operator) {
    operator.addEventListener('click', function(event) {
        event.preventDefault();
        inputArr.push(operator.innerHTML);
        displayCurrent.innerHTML += operator.innerHTML;
        // console.log(inputArr);
       
    })
})


clear.addEventListener('click', function (event) {
    event.preventDefault();
    displayCurrent.innerHTML = '';
})

decimal.addEventListener('click', function (event) {
    event.preventDefault();
    inputArr.push(decimal.innerHTML);
    displayCurrent.innerHTML += decimal.innerHTML;
})

result.addEventListener('click', function() {
    console.log("The input array is currently", inputArr);
    let numbersStringHolder = "";
    let equalFunctionArray = [];
    for (let char of inputArr) {
        const numReg = /\d/;
        if (numReg.test(char) || char === '.') {
            numbersStringHolder += char;
        } else {
            equalFunctionArray = [...equalFunctionArray, Number(numbersStringHolder), char]
            numbersStringHolder = "";
        }
    }
    equalFunctionArray = [...equalFunctionArray, Number(numbersStringHolder)];
    console.log("This array inside equals", equalFunctionArray);
})
