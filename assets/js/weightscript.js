// DOM
const input = document.getElementById("input");
const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Event Listener
input.addEventListener("keyup", weightCalc);
inputType.addEventListener("change", weightCalc);
resultType.addEventListener("change", weightCalc);

function weightCalc() {

    // This function receives the user input and calculates 
    // the math itself was taken from Google

    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    // calc gram to kg or pounds
    if (inputFrom === "gram" && resultTo === "gram") {
        result.value = Number(input.value);
    } else if (inputFrom === "gram" && resultTo === "kg") {
        result.value = Number(input.value) / 1000;

    } else if (inputFrom === "gram" && resultTo === "pounds") {
        result.value = Number(input.value) / 453.6;
    }

    // calc kg to gram or pounds
    if (inputFrom === "kg" && resultTo === "gram") {
        result.value = Number(input.value) * 1000;
    } else if (inputFrom === "kg" && resultTo === "kg") {
        result.value = Number(input.value);
    } else if (inputFrom === "kg" && resultTo === "pounds") {
        result.value = Number(input.value) * 2.205;
    }

    // calc pounds to gram or kg
    if (inputFrom === "pounds" && resultTo === "gram") {
        result.value = Number(input.value) * 453.6;
    } else if (inputFrom === "pounds" && resultTo === "kg") {
        result.value = Number(input.value) / 2.205;
    } else if (inputFrom === "pounds" && resultTo === "pounds") {
        result.value = Number(input.value);
    }

}