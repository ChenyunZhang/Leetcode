var reverseString = function (s) {
  for (let i = s.length-1; i >= 0; i--) {
    s.push(s.splice(i,1))
  }
  console.log(s.flat())
  return s.flat()
};

reverseString(["H", "a", "n", "n", "a", "h"]);
// ["h","a","n","n","a","H"]
