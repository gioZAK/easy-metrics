// DOM
const input = document.getElementById("input");
const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Event Listener
input.addEventListener("keyup", lengthCalc);
inputType.addEventListener("change", lengthCalc);
resultType.addEventListener("change", lengthCalc);

function lengthCalc() {
    // This function receives the user input and calculates 
    // the math itself was taken from Google

    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    //calculates cm
    if (inputFrom === "centimeter" && resultTo === "inches") {
        result.value = Number(input.value) * 0.3937;
    } else if (inputFrom === "centimeter" && resultTo === "foot") {
        result.value = Number(input.value) / 30.48;
    } else if (inputFrom === "centimeter" && resultTo === "miles") {
        result.value = Number(input.value) / 160900;
    } else if (inputFrom === "centimeter" && resultTo === "centimeter") {
        result.value = Number(input.value);
    } else if (inputFrom === "centimeter" && resultTo === "meter") {
        result.value = Number(input.value) / 100;
    } else if (inputFrom === "centimeter" && resultTo === "kilometer") {
        result.value = Number(input.value) / 100000;
    }

    //calculates meter
    if (inputFrom === "meter" && resultTo === "inches") {
        result.value = Number(input.value) * 39.37;
    } else if (inputFrom === "meter" && resultTo === "foot") {
        result.value = Number(input.value) * 3.281;
    } else if (inputFrom === "meter" && resultTo === "miles") {
        result.value = Number(input.value) / 1609;
    } else if (inputFrom === "meter" && resultTo === "centimeter") {
        result.value = Number(input.value) * 100;
    } else if (inputFrom === "meter" && resultTo === "meter") {
        result.value = Number(input.value);
    } else if (inputFrom === "meter" && resultTo === "kilometer") {
        result.value = Number(input.value) / 1000;
    }

    //calculates km 
    if (inputFrom === "kilometer" && resultTo === "inches") {
        result.value = Number(input.value) * 39370;
    } else if (inputFrom === "kilometer" && resultTo === "foot") {
        result.value = Number(input.value) * 3281;
    } else if (inputFrom === "kilometer" && resultTo === "miles") {
        result.value = Number(input.value) / 1.609;
    } else if (inputFrom === "kilometer" && resultTo === "centimeter") {
        result.value = Number(input.value) * 100000;
    } else if (inputFrom === "kilometer" && resultTo === "meter") {
        result.value = Number(input.value) * 1000;
    } else if (inputFrom === "kilometer" && resultTo === "kilometer") {
        result.value = Number(input.value);
    }

    //calculates inches
    if (inputFrom === "inches" && resultTo === "inches") {
        result.value = Number(input.value);
    } else if (inputFrom === "inches" && resultTo === "foot") {
        result.value = Number(input.value) / 12;
    } else if (inputFrom === "inches" && resultTo === "miles") {
        result.value = Number(input.value) / 63360;
    } else if (inputFrom === "inches" && resultTo === "centimeter") {
        result.value = Number(input.value) / 0.3937;
    } else if (inputFrom === "inches" && resultTo === "meter") {
        result.value = Number(input.value) / 39.37;
    } else if (inputFrom === "inches" && resultTo === "kilometer") {
        result.value = Number(input.value) / 39370;
    }

    //calculates foot
    if (inputFrom === "foot" && resultTo === "inches") {
        result.value = Number(input.value) * 12;
    } else if (inputFrom === "foot" && resultTo === "foot") {
        result.value = Number(input.value);
    } else if (inputFrom === "foot" && resultTo === "miles") {
        result.value = Number(input.value) / 5280;
    } else if (inputFrom === "foot" && resultTo === "centimeter") {
        result.value = Number(input.value) * 30.48;
    } else if (inputFrom === "foot" && resultTo === "meter") {
        result.value = Number(input.value) / 3.281;
    } else if (inputFrom === "foot" && resultTo === "kilometer") {
        result.value = Number(input.value) / 3281;
    }

    //calculates miles
    if (inputFrom === "miles" && resultTo === "inches") {
        result.value = Number(input.value) * 63360;
    } else if (inputFrom === "miles" && resultTo === "foot") {
        result.value = Number(input.value) * 5280;
    } else if (inputFrom === "miles" && resultTo === "miles") {
        result.value = Number(input.value);
    } else if (inputFrom === "miles" && resultTo === "centimeter") {
        result.value = Number(input.value) * 160900;
    } else if (inputFrom === "miles" && resultTo === "meter") {
        result.value = Number(input.value) * 1609;
    } else if (inputFrom === "miles" && resultTo === "kilometer") {
        result.value = Number(input.value) * 1.609;
    }

}