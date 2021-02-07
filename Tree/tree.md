Psudocode BFS

1. create a queue(this can be an array) and a variable to store the values of nodes visited.
2. Place the root node in the queue
3. Loop as long as there is anything in the queue 1. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes 2. If there is a left property on the node dequeued - add it to the queues 3. If there is a right property on the node dequed - add it to the queue
4. return the variable that stores the values

BFS goes by z
DFS:
inorder: start from bottom: left to right
preorder: start from root: left tree to right tree
postorder: 

BFS(){
let node = this.root
const data = []
const queue= []
queue.push(this.root)
while(queue.length){
node = queue.shift()
data.push(node)
if(node.left)queue.push(node.left)
if(node.right) queue.push(node.right)
}
return data
}

DFS - PreOrder
visit the root node first, then left subtree, then right subtree

create a var to store the values of nodes visited
store the root of the BST in a variable called current 
write a helper function which accepts a node