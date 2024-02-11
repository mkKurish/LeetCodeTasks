var isValid = function (s) {
    const stack = []
    for (let c of s) {
        if (stack[stack.length - 1] == reversedBracket(c)){
            if ([')', ']', '}'].includes(c))
                stack.pop()
            else
                return false
        }
        else
            stack.push(c)
    }
    return stack.length == 0
};

function reversedBracket(br) {
    switch (br) {
        case '(':
            return ')'
        case '[':
            return ']'
        case '{':
            return '}'
        case ')':
            return '('
        case ']':
            return '['
        case '}':
            return '{'
    }
    return undefined
}