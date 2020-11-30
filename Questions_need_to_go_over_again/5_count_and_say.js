var countAndSay = function (n) {
  let finalString = "1";

  if (n === 1) {
    return finalString;
  }

  let countPoint = 0;
  let charPoint = 0;
  let stringInProgress = "";

  while (n > 1) {
    while (charPoint < finalString.length) {
      while (finalString.charAt(countPoint) === finalString.charAt(charPoint)) {
        countPoint++;
      }
      stringInProgress += (countPoint - charPoint).toString();
      stringInProgress += finalString.charAt(charPoint);
      charPoint = countPoint;
    }
    finalString = stringInProgress;
    stringInProgress = "";
    charPoint = 0;
    countPoint = 0;
    n--;
  }
  return finalString
};

console.log(countAndSay(15))


// let countAndSay = function(n) {
//     let finalString = '1';
  
//     if (n === 1) {
//       return finalString;
//     }
  
//     let characterPointer = 0;
//     let countPointer = 0;
//     let stringInProgress = '';
  
//     while (n > 1) {
//       while (countPointer < finalString.length) {
//         while (finalString.charAt(characterPointer) === finalString.charAt(countPointer)) {
//           countPointer++;
//         }
        
//         stringInProgress += (countPointer - characterPointer).toString();
//         stringInProgress += finalString.charAt(characterPointer);
//         characterPointer = countPointer;
//       }
  
//       finalString = stringInProgress;
//       stringInProgress = '';
//       n--;
//       characterPointer = 0;
//       countPointer = 0;
//     }
  
//     return finalString;
//   };