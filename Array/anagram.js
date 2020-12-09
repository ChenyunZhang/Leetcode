// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// approach1
// function anagrams(stringA, stringB) {
//     const hash_A = {}
//     const hash_B = {}
//     const cleanstringA = stringA.replace(/\W/g,"").toLowerCase()
//     const cleanstringB = stringB.replace(/\W/g,"").toLowerCase()
    

//     if(cleanstringA.length !== cleanstringB.length){
//         return false
//     }

//     for(let char of cleanstringA){
//         hash_A[char] ? hash_A[char]+=1 : hash_A[char]=1 
//     }

//     for(let char of cleanstringB){
//         hash_B[char] ? hash_B[char]+=1 : hash_B[char]=1 
//     }

//     for(let k in hash_A){
//         if(hash_A[k] != hash_B[k]){
//             return false
//         }
//     }
//     return true
//     }

function anagrams(stringA, stringB){
    const cleanA = cleanString(stringA)
    const cleanB = cleanString(stringB)
    if(cleanA !== cleanB){
        return false
    }
    return true
}

function cleanString(str){
    return str.replace(/\W/g,"").toLowerCase().split("").sort().join('')
}

console.log(anagrams('hello', 'olleh')) 
