function sameFrequencyHelper(numStr) {
  let frequencyCounter = {};

  for(let digit of numStr.split('')) {
    frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
  }

  return frequencyCounter;

}
// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  let num1Str = num1.toString();
  let num2Str = num2.toString();

  if(num1Str.length !== num2Str.length) {
    return false;
  }

  let num1Freq = sameFrequencyHelper(num1Str);
  let num2Freq = sameFrequencyHelper(num2Str);

  for(let key in num1Freq) {
    if(num1Freq[key] !== num2Freq[key]) {
      return false;
    }
  }

  return true;
}
