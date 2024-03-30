// add whatever parameters you deem necessary
function twoArrayObject(k, v) {
   let obj = {};
    for(let i = 0; i < k.length; i++) {
      obj[k[i]] = v[i] || null;
    }

    return obj;
}