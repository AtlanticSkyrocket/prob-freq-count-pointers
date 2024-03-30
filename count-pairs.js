// add whatever parameters you deem necessary
function countPairs(arr, num) {
  let arrSet = new Set(arr);

  let count = 0;
  for( let val of arr) {
    if(arrSet.has(num - val) && val !== (num - val)) {
      count++;
    }
  }

  // we divide total count by two as both nums in pair are counted
  return count / 2;
}