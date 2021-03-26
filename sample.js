// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// input: "(){}[]", "([]{}({{{{"
// output: boolean 

// "(){}[]"
// https://leetcode.com/problems/valid-parentheses/

function valid(s){
    const stack = []
    const hash= {
        "(":")",
        "[":"]",
        "{":"}"
    }
    for(let i in s){
        if(hash[s[i]]){
            stack.push(s[i])
        }else{
            if(hash[stack.pop()] !== s[i]){
                return false
            }
        }
    }
    return stack.length===0 ? true : false
}


// Given a string s and a dictionary of strings wordDict, 
// return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:  
// Input: s = "apepplenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".

// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["sand","and","cat"]
// Output: false

// function CheckWord(s,wordDict){
//     const set = new Set()
//     const queue =[s.slice(wordDict[0].length)]
//     while(queue.length>0){
//         for(let word of wordDict){
            
//         }
//     }
// }

// var wordBreak = function(s, wordDict) {
//     const checked = new Set()
//     const queue = [``]
//     while(queue.length > 0){
//       const base = queue.shift()
//       for(const possibleNextWord of wordDict){
//         const possibleStr = base + possibleNextWord
//         if(possibleStr === s) return true
//         if(s.indexOf(possibleStr) === 0 && !checked.has(possibleStr)){
//           checked.add(possibleStr)
//           queue.push(possibleStr)
//         }
//       }
//     }
//     return false    
//   };

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to 
// buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Example 1:
// prev > temp ? 
                // prev = 1
                // price
                // final_profit = 5
                // curr_profit = 3
                //    v
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// let temp = Number.POSITIVE_INFINITY
// let prev = prices[0], curr_profit = prices[0]*-1, final_profit=0
// for(let i=1; i<price.length;prices){
//     if(prices[i]<prev){
//         curr_profit = prices[i]*-1
//     }
//     final_profit = Math.max(curr_profit,final_profit)
// }

// [7,6,4,3,1]

var min = Number.MAX_SAFE_INTEGER;
var max = 0;
for (var i = 0; i < prices.length; i++) {
    min = Math.min(min,prices[i])
    max = Max.max(max,prices[i]-min)
}
// return max
