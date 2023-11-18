/*
Runtime
12
ms
Beats
34.30%
of users with C++
Memory
22.00
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
class Solution {
public:
    int minLeaf(TreeNode* n){
        TreeNode* curr = n;
        while (curr->left)
            curr = curr->left;
        return curr->val;
    }
    int maxLeaf(TreeNode* n){
        TreeNode* curr = n;
        while (curr->right)
            curr = curr->right;
        return curr->val;
    }
    bool isValidBST(TreeNode* root) {
        if (root->left){
            if (!isValidBST(root->left))     
                return false;
            if (root->val <= maxLeaf(root->left))
                return false;
        }
        if (root->right){
            if (!isValidBST(root->right))     
                return false;
            if (root->val >= minLeaf(root->right))
                return false;
        }
        return true;
    }
};