/*
Runtime
Details
29ms
Beats 61.37%of users with C++
Memory
Details
12.58MB
Beats 86.23%of users with C++
*/
class Solution {
public:
    void sinkTheIsland(vector<vector<char>>* grid, int i, int j) {
        if (i < 0 || i >= grid->size())
            return;
        if (j < 0 || j >= grid->at(i).size())
            return;
        if (grid->at(i)[j] == '0')
            return;
        grid->at(i)[j] = '0';
        sinkTheIsland(grid, i - 1, j);
        sinkTheIsland(grid, i + 1, j);
        sinkTheIsland(grid, i, j - 1);
        sinkTheIsland(grid, i, j + 1);
    }
    int numIslands(vector<vector<char>>& grid) {
        int islands = 0;
        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0; j < grid[i].size(); j++) {
                if (grid[i][j] == '1') {
                    islands++;
                    sinkTheIsland(&grid, i, j);
                }
            }
        }
        return islands;
    }
};