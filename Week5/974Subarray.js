function getSubArrays(arr){
    if (arr.length === 1) return [arr];
    else {
        subarr = getSubArrays(arr.slice(1));
        return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
    }
  }