var maxDepth = function (root) {
    if (!root) return 0
    queue = [root]
    final = 0
    while (queue.length) {
        for (let i = 0; i < queue.length; i++) {
            let node = queue.shift()
            for (let i of node.children) {
                queue.push(i)
            }
        }
        final++
    }
    return final
};

const f = n => n <= 1 ? 1 : n * f(n - 1);
let g = f(4)
console.log(g)