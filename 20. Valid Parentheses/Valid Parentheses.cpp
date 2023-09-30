/*
Runtime
3 ms
Beats
43.8%
Memory
6.3 MB
Beats
41.8%
*/
class Stack {
private:
    class Element {
    public:
        char value;
        Element* refToNext;
        Element(char value, Element* refToNext) {
            this->value = value;
            this->refToNext = refToNext;
        }
        Element() {
            this->value = NULL;
            this->refToNext = NULL;
        }
    };
    Element* e;
public:
    Stack() {
        e = new Element();
    }
    void push(char value) {
        e = new Element(value, e);
    }
    char peek() {
        return e->value;
    }
    void pop() {
        e = e->refToNext;
    }
    bool isEmpty() {
        return e->refToNext == NULL;
    }
};

bool firstIsRevertedSecond(char f, char s) {
    switch (f) {
    case '(':
        return s == ')';
        break;
    case '[':
        return s == ']';
        break;
    case '{':
        return s == '}';
        break;
    }
    return false;
}


bool isValid(string s) {
    Stack stack;
    stack.isEmpty();
    for (int i = 0; i < s.length(); i++) {
        if (s[i] == '(' ||
            s[i] == '[' ||
            s[i] == '{') {
            stack.push(s[i]);
        }
        else {
            if (stack.isEmpty() || !firstIsRevertedSecond(stack.peek(), s[i])) {
                return false;
            }
            else {
                stack.pop();
            }
        }
    }
    return stack.isEmpty();
}

class Solution {
public:
    bool isValid(string s) {
        Stack stack;
        for (int i = 0; i < s.length(); i++){
            if (s[i] == '(' ||
            s[i] == '[' ||
            s[i] == '{'){
                stack.push(s[i]);
            }else{
                if (stack.isEmpty() || !firstIsRevertedSecond(stack.peek(), s[i])){
                    return false;
                }else{
                    stack.pop();
                }
            }
        }
        return stack.isEmpty();
    }
};