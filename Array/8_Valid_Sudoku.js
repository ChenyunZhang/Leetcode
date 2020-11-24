// psuedocode
// there are 3 cases need to be checked
// row, column, square


var isValidSudoku = function (board) {
    let row = []
    let col = []
    let box = []

    for(let i=0; i< board.length;i++){
        row[i] = new Map()
        col[i] = new Map()
        box[i] = new Map()
    }

    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            item = board[i][j]
            if(item === ".") continue
            if(row[i].has(item)){
                return false
            }else{
                row[i].set(item,true)
            }

            if(col[j].has(item)){
                return false
            }else{
                col[j].set(item,true)
            }

            // boxindex helps to check the square
            let boxindex = Math.floor(i/3)*3 + Math.floor(j/3)

            if(box[boxindex].has(item)){
                return false
            }else{
                box[boxindex].set(item,true)
            }
        }
    }
    return true
};

let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))
