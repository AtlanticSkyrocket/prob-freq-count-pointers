function constructNoteHelper(string) {
  let frequencies = new Map();
  for(let val of string.split('')) {
    frequencies.set(val, (frequencies.get(val) || 0) + 1);
  }
  return frequencies;
}
// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if(message.length > letters.length) return false;
  if(message.length === 0) return true;

  let messageFreq = constructNoteHelper(message);
  let lettersFreq = constructNoteHelper(letters);
  
  for(let [key, val] of messageFreq.entries()) {
    if(!lettersFreq.has(key) || lettersFreq.get(key) < val) {
      return false;
    }
  }
  return true;
}