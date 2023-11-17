/*
Runtime
19
ms
Beats
20.61%
of users with C++
Memory
25.48
MB
Beats
74.64%
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
 #include <climits>
class Solution {
public:
    int maxLeaf(TreeNode* node){
        if (!node)
            return INT_MAX;
        TreeNode* curr = node;
        while(curr->right)
            curr = curr->right;
        return curr->val;
    }
    int minLeaf(TreeNode* node){
        if (!node)
            return INT_MAX;
        TreeNode* curr = node;
        while(curr->left)
            curr = curr->left;
        return curr->val;
    }
    int getMinimumDifference(TreeNode* root) {
        int min = INT_MAX;
        int diff;
        if (root->left){
            diff = root->val - maxLeaf(root->left);
            if (diff < min)
                min = diff;
            diff = getMinimumDifference(root->left);
            if (diff < min)
                min = diff;
        }
        if (root->right){
            diff = minLeaf(root->right) - root->val;
            if (diff < min)
                min = diff;
            diff = getMinimumDifference(root->right);
            if (diff < min)
                min = diff;
        }
        return min;
    }
};