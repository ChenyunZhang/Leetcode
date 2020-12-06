// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map = new Map()
    let final=0
    let result
    for(let char of str){
        if(map.has(char)){
            map.set(char, (map.get(char))+1)
        }else{
            map.set(char, 1)
        }
    }
    for(let [key,val] of map){
        if(final<val){
            final = val
            result = key
        }
    }
    return result
}