function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  const hash = {};
  for (let i = 0; i < arguments.length; i++) {
    if (hash[arguments[i]]) {
      return true
    }else{
        hash[arguments[i]] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
