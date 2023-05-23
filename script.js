var heightInput = document.querySelector("#height-input");
var weightInput = document.querySelector("#weight-input");
var heightUnitSelect = document.querySelector("#height-unit");
var weightUnitSelect = document.querySelector("#weight-unit");
var calculateButton = document.querySelector(".calculate-button");
var result = document.querySelector("#result");
var statement = document.querySelector("#result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", () => {
    height = parseFloat(heightInput.value);
    weight = parseFloat(weightInput.value);

    if (heightUnitSelect.value === "feet") {
        // Convert height from feet to meters
        height *= 0.3048;
    }

    if (weightUnitSelect.value === "pounds") {
        // Convert weight from pounds to kilograms
        weight *= 0.453592;
    }

    BMI = weight / (height ** 2);
    result.innerText = BMI.toFixed(2);

    if (BMI < 18.5) {
        statement.innerText = "Votre IMC indique une insuffisance pondérale.";
    } else if (BMI >= 18.5 && BMI < 25) {
        statement.innerText = "Votre IMC indique un poids normal.";
    } else if (BMI >= 25 && BMI < 30) {
        statement.innerText = "Votre IMC indique un léger surpoids.";
    } else {
        statement.innerText = "Votre IMC indique une obésité.";
    }
});
