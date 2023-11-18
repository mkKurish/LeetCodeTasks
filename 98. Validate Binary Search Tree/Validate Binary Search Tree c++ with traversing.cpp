/*
Runtime
8
ms
Beats
68.53%
of users with C++
Memory
22.07
MB
Beats
53.10%
of users with C++
*/
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
 #include <vector>
class Solution {
public:
    void inorder(TreeNode* n, vector<int>* v){
        if (n->left) inorder(n->left, v);
        v->push_back(n->val);
        if (n->right) inorder(n->right, v);
    }
    bool isValidBST(TreeNode* root) {
        vector<int> v;
        inorder(root, &v);
        for (int i = 1; i < v.size(); i++)
            if (v[i - 1] >= v[i])
                return false;
        return true;
    }
};