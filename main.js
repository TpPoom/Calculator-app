const btnAll = $(".btn");
const btnNum = $(".num");
const btnOperation = $(".operation");
const btnEqual = $("#equal");
const inputNumber = $("#inputNumber")[0];
const del = $("#del");
const reset = $("#reset");
const numOnScreen = inputNumber.innerHTML;

var firstValue;
var secondValue;
var operation;
var result;
var deleteNum;

//Number Button
btnNum.on("click", btnNumClick);

function btnNumClick() {
    if (inputNumber.innerHTML.slice(-1) == ("+") || inputNumber.innerHTML.slice(-1) == ("-") || inputNumber.innerHTML.slice(-1) == ("x") || inputNumber.innerHTML.slice(-1) == ("/")) {
        inputNumber.innerHTML = "";
        inputNumber.style.opacity = "1";
    }

    addValue = inputNumber.innerHTML + this.innerHTML;

    if (this.innerHTML != ".") {
        if (inputNumber.innerHTML.includes(".") == false) {
            number = parseFloat(addValue.replace(/[^0-9.-]/g, ""));
            inputNumber.innerHTML = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            inputNumber.innerHTML = addValue;
        }
    } else {
        if (inputNumber.innerHTML.includes(".") == false && inputNumber.innerHTML != "") {
            inputNumber.innerHTML = addValue;
        } else if (inputNumber.innerHTML == "") {
            inputNumber.innerHTML = "0.";
        }
    }

    if (firstValue != undefined) {
        secondValue = parseFloat(inputNumber.innerHTML.replace(/[^0-9.-]/g, ""));
    }
}

//Operation Button
btnOperation.on("click", btnOperationClick)

function btnOperationClick() {
    if (inputNumber.innerHTML != "") {
        if (secondValue != undefined) {
            btnEqualClick();
            operation = this.innerHTML;
            firstValue = parseFloat(inputNumber.innerHTML.replace(/[^0-9.-]/g, ""));

            inputNumber.innerHTML = result.toLocaleString(undefined, { maximumFractionDigits: 6 }) + " " + this.innerHTML;

            secondValue = undefined;
        } else {
            firstValue = parseFloat(inputNumber.innerHTML.replace(/[^0-9.-]/g, ""));

            operation = this.innerHTML;
            addOperation = firstValue.toLocaleString(undefined, { maximumFractionDigits: 6 });
            inputNumber.innerHTML = addOperation + " " + this.innerHTML;
        }

        inputNumber.style.opacity = "0.5";
    }
}

//Equal Button
btnEqual.on("click", btnEqualClick)

function btnEqualClick() {
    if (secondValue != undefined && inputNumber.innerHTML != "") {
        if (operation == "+") {
            result = firstValue + secondValue;
        } else if (operation == "-") {
            result = firstValue - secondValue;
        } else if (operation == "x") {
            result = firstValue * secondValue;
        } else if (operation == "/") {
            result = firstValue / secondValue;
        }

        inputNumber.innerHTML = result.toLocaleString(undefined, { maximumFractionDigits: 6 });
        firstValue = undefined;
        secondValue = undefined;
    }
}

//Delete Button
del.on("click", () => {
    if (inputNumber.style.opacity != "0.5" && inputNumber.innerHTML != "") {
        if (inputNumber.innerHTML.includes(".") || inputNumber.innerHTML.slice(-1) == ".") {
            deleteNum = inputNumber.innerHTML;
            deleteNumber = deleteNum.toString().slice(0, -1);
        } else if (inputNumber.innerHTML.includes(".") == false) {
            deleteNum = parseFloat(inputNumber.innerHTML.replace(/[^0-9.-]/g, ""));
            deleteNumber = deleteNum.toString().slice(0, -1);
            deleteNumber = parseFloat(deleteNumber).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        if (deleteNum.toString().length != 1 && deleteNum != "NaN") {
            inputNumber.innerHTML = deleteNumber;
            firstValue = undefined;
            secondValue = undefined;
        } else {
            inputNumber.innerHTML = "";
            firstValue = undefined;
            secondValue = undefined;
        }
    }
})

//Reset Button
reset.on("click", () => {
    inputNumber.innerHTML = "";
    operation = undefined;
    firstValue = undefined;
    secondValue = undefined;
    result = undefined;
    deleteNum = undefined;
})