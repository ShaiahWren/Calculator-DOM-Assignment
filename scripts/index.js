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
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');
const percentage = document.querySelector('.percentage');
let del = document.querySelector('#del');
let inputArr = [];
let displayCurrent = document.querySelector('.input');
let equalsPressed = false;
let lastCharOperator = false;


numbers.forEach(function(number) {
    number.addEventListener('click', function(event) {
        if (equalsPressed === true) {
            displayCurrent.innerHTML = '';
            inputArr = [];
            equalsPressed = false;
        }
        lastCharOperator = false;
        event.preventDefault();
        inputArr.push(number.innerHTML);
        console.log(inputArr)
        displayCurrent.innerHTML += number.innerHTML;
        
    })
})

operators.forEach(function(operator) {
    operator.addEventListener('click', function(event) {
        if (equalsPressed === true) {
            displayCurrent.innerHTML = '';
            inputArr = [];
            equalsPressed = false;
        }
        if (! lastCharOperator) {
            lastCharOperator = true; 
        
        event.preventDefault();
        inputArr.push(operator.innerHTML);
        displayCurrent.innerHTML += operator.innerHTML;
        // console.log(inputArr);
        }
       
    })
})


clear.addEventListener('click', function (event) {
    event.preventDefault();
    displayCurrent.innerHTML = '';
    inputArr = [];
})

decimal.addEventListener('click', function (event) {
    event.preventDefault();
    inputArr.push(decimal.innerHTML);
    displayCurrent.innerHTML += decimal.innerHTML;
})

percentage.addEventListener('click', function (event) {
    event.preventDefault();
    percentResult = Number(displayCurrent.innerHTML)/100;
    displayCurrent.innerHTML = percentResult;

})

del.addEventListener('click', function (event) {
    event.preventDefault();
    inputArr.pop()
    remove = [,]
    inputArr = inputArr.filter((element) => !remove.includes(element))
    displayCurrent.innerHTML = inputArr.join('');
})


result.addEventListener('click', function() {
    console.log("The input array is currently", inputArr);
    let numbersStringHolder = "";
    let resultArr = [];
    for (let char of inputArr) {
        const numReg = /\d/;
        if (numReg.test(char) || char === '.') {
            numbersStringHolder += char;
        } else {
            resultArr = [...resultArr, Number(numbersStringHolder), char]
            numbersStringHolder = "";
        }
    }
    resultArr = [...resultArr, Number(numbersStringHolder)];
    
    let add = resultArr.indexOf("+");
    while (add !== -1) {
        resultArr.splice(add-1, 3, resultArr[add-1] + resultArr[add+1]);
        add = resultArr.indexOf("+");
    }
    let subtract = resultArr.indexOf("-");
    while (subtract !== -1) {
        resultArr.splice(subtract-1, 3, resultArr[subtract-1] - resultArr[subtract+1]);
        subtract = resultArr.indexOf("-");
    }
    let multiply = resultArr.indexOf("x");
    while (multiply !== -1) {
        resultArr.splice(multiply-1, 3, resultArr[multiply-1] * resultArr[multiply+1]);
        multiply = resultArr.indexOf("x");
    }
    let divide = resultArr.indexOf("÷");
    while (divide !== -1) {
        resultArr.splice(divide-1, 3, resultArr[divide-1] / resultArr[divide+1]);
        divide = resultArr.indexOf("÷");
    }
    inputArr = [...resultArr]
    displayCurrent.innerHTML = inputArr[0].toFixed(2);
    equalsPressed = true;
   

});
