var diameterOfBinaryTree = function(root) {
    if (root == null)
        return 0
    function getMaxDistance(root, distance) {
        if (root == null)
            return distance
        const leftDist = getMaxDistance(root.left, distance + 1)
        const rightDist = getMaxDistance(root.right, distance + 1)
        return Math.max(leftDist, rightDist)
    }
    return Math.max(getMaxDistance(root.left, 0) + getMaxDistance(root.right, 0),
                    diameterOfBinaryTree(root.left),
                    diameterOfBinaryTree(root.right))
};

// The actual 'diameter', which means the maximum width of the branches
var diameterOfBinaryTree = function(root) {
    function getMaxDistance(root, distance) {
        if (root == null)
            return distance
        const leftDist = getMaxDistance(root.left, distance - 1)
        const rightDist = getMaxDistance(root.right, distance + 1)
        return Math.abs(leftDist) > Math.abs(rightDist) ? leftDist : rightDist
    }
    return Math.abs(getMaxDistance(root, 0))
};