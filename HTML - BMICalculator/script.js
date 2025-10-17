function calculateBMI(event) {
    event.preventDefault();
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const meas = document.getElementById("meas").value;
    const result = document.getElementById("result");



    if (weight && height) {
        if (meas == 1) {
            result.textContent = `Your BMI = ${metricCalc(weight, height)}`;
            result.style.color = "blue";
        } else if (meas == 2) {
            result.textContent = `Your BMI = ${imperialCalc(weight,height)}`;
            result.style.color = "blue";
        }
    } else {
        result.textContent = `Please input both values`;
        result.style.color = "red";
    }

}

function metricCalc(weight, height) {
    return weight / (height * height);
}

function imperialCalc(weight, height) {
    return (weight / (height * height)) * 703;
}