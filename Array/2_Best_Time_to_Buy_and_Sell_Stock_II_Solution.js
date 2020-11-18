var maxProfit = function(prices) {
let profit=0
   for(let i=0; i<prices.length ;i++){
       if(prices[i+1] > prices[i]){
           profit+= prices[i+1] - prices[i]
       }
   }
}
maxProfit([1,2,3,4,100])

// draw a line chart, one transaction per day.
// do as much transaction as possible