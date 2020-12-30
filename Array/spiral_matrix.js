// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = []
    counter = 1
    let startCol = 0
    let endCol = n-1
    let startRow = 0
    let endRow = n-1

    for(let i =0;i<n;i++){
        result.push([])
    }
    console.log("result",result)

    while(startCol<=endCol && startRow<=endRow){
        for(let i=startCol;i<=endCol;i++){
            result[startRow][i] = counter
            counter++
        }
        startRow++

        for(let i=startRow;i<=endRow;i++){
            result[i][endCol] = counter
            counter++
        }
        endCol--
        
        for(let i=endCol;i>=startCol;i--){
            result[endRow][i] = counter
            counter++
        }
        endRow--

        for(let i=endRow;i>=startRow;i--){
            result[i][startCol] = counter
            counter++
        }
        startCol++
    }
    return result
}
// create empty attay of arrays called result
// create a counter var, starting at 1
// as long as (start column < end column) and (start row <= end row)
// loop from start col to end col
// at results[start_row][i] assign counter variable
// increment counter
// increment start row
// loop from start row to end row
// at results[i][end_col] assign counter var
// increment counter
// decrement end row
// ...repeat for other two sides


console.log(matrix(4))

module.exports = matrix;


// function matrix(n) {
//     const result = []

//     for(let i=0;i<n;i++){
//         result.push([])
//     }
//     let counter = 1
//     let startCol = 0
//     let endCol = n-1
//     let startRow = 0
//     let endRow = n-1

//     while(startCol<=endCol && startRow<=endRow){
//         // responsible for the top row
//         for(let i=startCol;i<=endCol;i++){
//             result[startRow][i]=counter
//             counter++
//         }
//         startRow++

//         for(let i=startRow;i<=endRow;i++){
//             result[i][endCol]=counter
//             counter++
//         }
//         endCol--

//         for(let i=endCol;i>=startCol;i--){
//             result[endRow][i]=counter
//             counter++
//         }
//         endRow--

//         for(let i=startRow;i<=endRow;i++){
//             result[i][startCol]=counter
//             counter++
//         }
//         startCol++
//     }
//     return result
// }