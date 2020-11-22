// pseudocode
// classify different cases
// first: 45 -> 46, straight forward
// second: 999 => 1000, you need to add one number to this array
// third: 1999 => 2000, you don't need to add one number, but you change the while array numbers.

var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0 ;i--){
        digits[i]++
        digits[i]%=10
        if(digits[i] != 0){
            return digits
        }
    }
    const newArr = [1, ...digits]
    return newArr
};
