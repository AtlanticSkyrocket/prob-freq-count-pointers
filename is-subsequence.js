// add whatever parameters you deem necessary
function isSubsequence(subsequence, sequence) {
  let i = 0;
  let j = 0;
  while(i < subsequence.length && j < sequence.length) {
    if(subsequence[i] === sequence[j]) {
      i++;
    }
    j++;
  }
  return i === subsequence.length;
}
