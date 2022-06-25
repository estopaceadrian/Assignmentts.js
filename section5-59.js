const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`Max: ${max} | Min: ${min}`);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(
  [3, 5, 1],
  [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
);
console.log(amplitudeNew);

// const amplitude = calcTempAmplitude(temperatures);
console.log(`Amplitude: ${amplitudeNew}`);

//function should now receive 2 arrays of temps

// 1.) understanding the problem
// -with 2 arrays, should we implement functionality twice? no! jsut merge 2 arrays

//2. breaung up into sub-portions
// how to merge 2 arrays
