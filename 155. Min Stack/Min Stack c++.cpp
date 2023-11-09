/*
Runtime
21ms
Beats 29.63%of users with C++
Memory
16.96MB
Beats 10.12%of users with C++
*/

#include <climits>
#include <stack>
class MinStack {
private:
    class Node{
    public:
        int value;
        Node* next;
        Node(){}
        Node(int val, Node* next = nullptr){
            this->value = val;
            this->next = next;
        }
    };
    Node* head = nullptr;
    std::stack<int> mins;
public:
    MinStack() {
        
    }
    
    void push(int val) {
        Node* temp = new Node(val, head);
        head = temp;
        if (mins.size() < 1)
            mins.push(val);
        else if (val <= mins.top())
            mins.push(val);
    }
    
    void pop() {
        Node* temp = head;
        head = head->next;
        if (temp->value == mins.top())
            mins.pop();
        delete temp;
    }
    
    int top() {
        return head->value;
    }
    
    int getMin() {
        return mins.top();
    }
};