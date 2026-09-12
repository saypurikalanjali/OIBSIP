function convertTemperature(){
    let temperature= parseFloat(document.querySelector('input[type="number"]').value);
    let unit= document.querySelector('select').value;
    let result=document.getElementById("result");
    if(isNaN(temperature)) {
        result.textContent="Please enter a temperature.";
        return;
    }
    if(unit==="celsius") {
        let fahrenheit =(temperature * 9 / 5)+ 32;
        let kelvin = temperature + 273.15;
        result.textContent =temperature +"°C="+
        fahrenheit.toFixed(2)+"°F="+
        kelvin.toFixed(2)+"K";
    }
    else if(unit==="fahrenheit") {
        let celsius =(temperature - 32) * 5 / 9;
        let kelvin = celsius + 273.15;
        result.textContent = temperature + "°F="+
        celsius.toFixed(2)+"°C="+
        kelvin.toFixed(2)+"K";
    }
    else if(unit==="kelvin") {
        let celsius = temperature - 273.15;
        let fahrenheit = (celsius * 9 / 5) + 32;
        result.textContent = temperature + "K=" + celsius.toFixed(2) + "°C="+ fahrenheit.toFixed(2) + "°F";
    }
}
