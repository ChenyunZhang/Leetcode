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

// function anagrams(stringA, stringB){
//     return cleanString(stringA) === cleanString(stringB)
// }

// function cleanString(str){
//     return str.replace(/\W/g,"").toLowerCase().split("").sort().join('')
// }

// console.log(anagrams('hello', 'olleh'))

function validAnagram(strA,strB){
    // add whatever parameters you deem necessary - good luck!
    // if the length of the two strings are not equal to each other, return false
    // write a helper function to create two objects, the key will be the letter, value will be the frequency
    // check if the key in the first string object are all in the second string
    // check if the value in the first string  object are all in the second string
    // return false if any of them is not there
    // otherwise, return false
        if(strA.length !== strB.length){
            return false
        }
        const objA = stringToObject(strA.toLowerCase())
        const objB = stringToObject(strB.toLowerCase())
        for(let item in objA){
            if(!objB[item]){
                return false
            }
            if( objA[item]!== objB[item]){
                return false
            }
        }
        return true
    }

function stringToObject(str){
    let obj = {}
    for(let i in str){

        obj[str[i]] ? obj[str[i]]+=1 : obj[str[i]]=1
    }
    return obj
}

    console.log(validAnagram("olleh","hello"))