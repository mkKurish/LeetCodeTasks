class Solution {
    class TreeNode {
        String value;
        TreeNode left;
        TreeNode right;

        TreeNode(String value) {
            this.value = value;
        }
    }

    ArrayList<String> op = new ArrayList<String>() {
        {
            add("+");
            add("-");
            add("*");
            add("/");
        }
    };

    TreeNode treeFromRPN(ArrayList<String> tokens){
        TreeNode node = new TreeNode(tokens.get(tokens.size() - 1));
        tokens.remove(tokens.size() - 1);
        if (op.contains(node.value)){
            node.right = treeFromRPN(tokens);
            node.left = treeFromRPN(tokens);
        }
        return node;
    }

    int evalRPNTree(TreeNode tree) {
        if (!op.contains(tree.value)){
            return Integer.parseInt(tree.value);
        }
        int l = evalRPNTree(tree.left);
        int r = evalRPNTree(tree.right);
        return switch (tree.value) {
            case "+" -> l + r;
            case "-" -> l - r;
            case "*" -> l * r;
            case "/" -> l / r;
            default -> 0;
        };
    }

    public int evalRPN(String[] tokens) {
        return evalRPNTree(treeFromRPN(
                new ArrayList<String>(){{
                    this.addAll(Arrays.asList(tokens));
                }}
        ));
    }
}