/*
Runtime
11
ms
Beats
81.74%
of users with C++
Memory
24.75
MB
Beats
16.23%
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
    int kthSmallest(TreeNode* root, int k) {
        vector<int> v;
        inorder(root, &v);
        return v[k - 1];
    }
};