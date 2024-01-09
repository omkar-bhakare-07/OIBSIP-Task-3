function convertTemperature() {

  let temperature = parseFloat(document.getElementById("temperature").value);
  let inputUnit = document.getElementById("unit").value;
  let outputUnit = document.getElementById("outputUnit").value;

  if (isNaN(temperature)) {
    alert("Please enter a valid number!");
    return;
  }
  let result;
  switch (inputUnit) {
    case "celsius":
      result = convertFromCelsius(temperature, outputUnit);
      break;
    case "fahrenheit":
      result = convertFromFahrenheit(temperature, outputUnit);
      break;
    case "kelvin":
      result = convertFromKelvin(temperature, outputUnit);
      break;
    default:
      alert("Invalid input unit!");
      return;
  }

  document.getElementById("selectedUnit").innerText = outputUnit.toUpperCase();
  document.getElementById("result").innerText = `${result.toFixed(2)}°${outputUnit.toUpperCase()}`;
  document.getElementById("convertedTemperatureSection").style.display = "block";
}
  function convertFromCelsius(temp, unit) {
    switch (unit) {
      case "celsius":
        return temp;
      case "fahrenheit":
        return (temp * 9/5) + 32;
      case "kelvin":
        return temp + 273.15;
      default:
        return NaN;
    }
  }

  function convertFromFahrenheit(temp, unit) {
    switch (unit) {
      case "celsius":
        return (temp - 32) * 5/9;
      case "fahrenheit":
        return temp;
      case "kelvin":
        return (temp - 32) * 5/9 + 273.15;
      default:
        return NaN;
    }
  }
  function convertFromKelvin(temp, unit) {
    switch (unit) {
      case "celsius":
        return temp - 273.15;
      case "fahrenheit":
        return (temp - 273.15) * 9/5 + 32;
      case "kelvin":
        return temp;
      default:
        return NaN;
    }
  }
  