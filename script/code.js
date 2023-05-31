

function temperatureCelsius(){
    let celsius = +document.querySelector("#C-screen").value;
    let result = document.querySelector("#answer")

    let calculationCelsius = (celsius * 1.8) + 32;
    result.innerText = calculationCelsius;
    
    
}

function temperatureFahrenheit(){
    let fahrenheit = +document.querySelector("#F-screen").value;
    let result = document.querySelector("#answer")

    let calculationFahrenheit = ((fahrenheit - 32)/ 1.8).toFixed(2);
     result.innerText = calculationFahrenheit;
}