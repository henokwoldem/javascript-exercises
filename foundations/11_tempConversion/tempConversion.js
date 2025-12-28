const convertToCelsius = function(fTemp) {
  let c =  (5/9) * (fTemp - 32);
  return +c.toFixed(1)
};

const convertToFahrenheit = function(cTemp) {
  let f =  9/5*cTemp + 32;
  return +f.toFixed(1);
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
