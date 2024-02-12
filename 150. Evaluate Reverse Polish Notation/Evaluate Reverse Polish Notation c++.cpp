class Solution {
    class TreeNode {
    public:
        string value;
        TreeNode* left = nullptr;
        TreeNode* right = nullptr;
        TreeNode(string value) {
            this->value = value;
        }
    };
    vector<string> op{ "+", "-", "*", "/" };
public:
    TreeNode* treeFromRPN(vector<string>* tokens) {
        TreeNode* node = new TreeNode(tokens->at(tokens->size() - 1));
        tokens->pop_back();
        for (string st : op) {
            if (st == node->value) {
                node->right = treeFromRPN(tokens);
                node->left = treeFromRPN(tokens);
                break;
            }
        }
        return node;
    }

    int evalRPNTree(TreeNode* tree) {
        bool flag = true;
        for (string st : op) {
            if (st == tree->value) {
                flag = false;
                break;
            }
        }
        if (flag)
            return atoi(tree->value.c_str());
        int l = evalRPNTree(tree->left);
        int r = evalRPNTree(tree->right);
        if (tree->value == "+") {
            return l + r;
        }
        else if (tree->value == "-") {
            return l - r;
        }
        else if (tree->value == "*") {
            return l * r;
        }
        else {
            return l / r;
        }
    }

    int evalRPN(vector<string>& tokens) {
        return evalRPNTree(treeFromRPN(&tokens));
    }
};