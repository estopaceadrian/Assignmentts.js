const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: '112',
  };
  console.log(measurement);
  console.table(measureKelvin.value);
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());
