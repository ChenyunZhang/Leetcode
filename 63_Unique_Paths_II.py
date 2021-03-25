/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const plane = []
    // setup plane
    for(let i=0;i<m;i++){
        plane.push([])
        for(let j=0;j<n;j++){
            plane[plane.length-1].push(1)
        }
    }
    // 
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            plane[i][j] = plane[i-1][j]+plane[i][j-1]  
        }
    }
    return plane[m-1][n-1]
};