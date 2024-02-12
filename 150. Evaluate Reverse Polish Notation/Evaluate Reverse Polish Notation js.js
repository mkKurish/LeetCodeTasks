/*
Runtime
48
ms
Beats
97.62%
of users with JavaScript
Memory
50.98
MB
Beats
70.37%
of users with JavaScript
*/

const op = ['+', '-', '*', '/']

function treeFromRPN(tokens) {
    const node = {
        value: tokens.pop()
    }
    if (op.includes(node.value)) {
        node.right = treeFromRPN(tokens)
        node.left = treeFromRPN(tokens)
    }
    return node
}

function evalRPNTree(tree) {
    if (!op.includes(tree.value))
        return tree.value
    const l = Number(evalRPNTree(tree.left))
    const r = Number(evalRPNTree(tree.right))
    switch (tree.value) {
        case '+':
            return l + r
        case '-':
            return l - r
        case '*':
            return l * r
        case '/':
            return Math.trunc(l / r)
    }
    return undefined
}

var evalRPN = tokens => evalRPNTree(treeFromRPN(tokens))

tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// tokens = ["4","13","5","/","+"]
// tokens = ["4","-2","/","2","-3","-","-"]
console.log(treeFromRPN(tokens))
tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// tokens = ["4","13","5","/","+"]
// tokens = ["4","-2","/","2","-3","-","-"]
console.log(evalRPN(tokens))