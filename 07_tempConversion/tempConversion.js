const convertToCelsius = function(fahrenheit) {
  fahrenheit = Math.round((fahrenheit - 32) * (5 / 9) * 10);
  let fahrenheitConverted = fahrenheit / 10;
  return fahrenheitConverted;
};

const convertToFahrenheit = function(celsius) {
  celsius = Math.round(((celsius * 9) / 5 + 32) * 10);
  let celsiusConverted = celsius / 10;
  return celsiusConverted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
