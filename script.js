// Declarations
const buttonEl = document.querySelectorAll(".button")
const screenEl = document.querySelector(".screen")
const numberBtn = document.querySelectorAll(".number")
const divideBtn = document.querySelector(".divide")
const multiplyBtn = document.querySelector(".multiply")
const subtractBtn = document.querySelector(".subtract")
const addBtn = document.querySelector(".add")
const deleteBtn = document.querySelector(".delete")
const clearBtn = document.querySelector(".clear")
const decimalBtn = document.querySelector(".decimal")
const equalsBtn = document.querySelector(".equals")
const operatorBtn = document.querySelectorAll('.op')
let num = ''
let parsedNum
let numArr = []

// Named Functions
let resetScreen = function() {
    screenEl.textContent = ''
}




// Arithmetic
const calc = (() => {
    const add = function(...nums) {
        return nums[0] + nums[1]
    };
    const subtract = function(...nums) {
        return nums[0] - nums[1]
    };
    const multiply = function(...nums) {
        return nums[0] * nums[1]
    };
    const divide = function(...nums) {
        return nums[0] / nums[1]
    };
    return {add, subtract, multiply, divide}
})();

// Event Listeners
numberBtn.forEach((numberBtn) => {
    numberBtn.addEventListener('click', function() {
    if (numArr.length < 2) {
        if (numberBtn.textContent === '.' && screenEl.textContent.includes('.') == false) {
            num += numberBtn.textContent
            parsedNum = parseFloat(num)
            screenEl.textContent = parsedNum + '.'
        } else if (numberBtn.textContent != '.') {
            num += numberBtn.textContent
            parsedNum = parseFloat(num)
            screenEl.textContent = parsedNum
        }
    } else if (numArr.length >= 2) {
        resetScreen()
        if (numberBtn.textContent === '.' && screenEl.textContent.includes('.') == false) {
            num += numberBtn.textContent
            parsedNum = parseFloat(num)
            screenEl.textContent = parsedNum + '.'
        } else if (numberBtn.textContent != '.') {
            num += numberBtn.textContent
            parsedNum = parseFloat(num)
            screenEl.textContent = parsedNum
        }
    }
})});

operatorBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', function() {
        if (operatorBtn.textContent === '+') {
            parsedNum = parseFloat(screenEl.textContent)
            numArr.push(parsedNum)
            numArr.push(calc.add)
            num = 0
        } else if (operatorBtn.textContent === '-') {
            parsedNum = parseFloat(screenEl.textContent)
            numArr.push(parsedNum)
            numArr.push(calc.subtract)
            num = 0
        } else if (operatorBtn.textContent === 'X') {
            parsedNum = parseFloat(screenEl.textContent)
            numArr.push(parsedNum)
            numArr.push(calc.multiply)
            num = 0
        } else if (operatorBtn.textContent === '/') {
            parsedNum = parseFloat(screenEl.textContent)
            numArr.push(parsedNum)
            numArr.push(calc.divide)
            num = 0
        } else if (operatorBtn.textContent === '=') {
            parsedNum = parseFloat(screenEl.textContent)
            numArr.push(parsedNum)
        }
    }
)})

equalsBtn.addEventListener('click', function() {
    if (numArr[1] == calc.add) {
        let added = calc.add(numArr[0], numArr[2])
        screenEl.textContent = added
    } else if (numArr[1] == calc.subtract) {
        let subtracted = calc.subtract(numArr[0], numArr[2])
        screenEl.textContent = subtracted
    } else if (numArr[1] == calc.multiply) {
        let multiplied = calc.multiply(numArr[0], numArr[2])
        screenEl.textContent = multiplied
    } else if (numArr[1] == calc.divide && numArr[2] == 0) {
        screenEl.textContent = "Calculator is broken..."
    } else if (numArr[1] == calc.divide) {
        let divided = calc.divide(numArr[0], numArr[2])
        screenEl.textContent = divided
    } 
})

equalsBtn.addEventListener('click', function() {
    numArr = []
})


clearBtn.addEventListener('click', function() {
    screenEl.textContent = ''
    num = 0
});

deleteBtn.addEventListener('click', function() {
    num = screenEl.textContent
    let deletedNum = num.substring(0,(num.length-1))
    parsedNum = parseFloat(deletedNum)
    screenEl.textContent = parsedNum
    num = parsedNum
});