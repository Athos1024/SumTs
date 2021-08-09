namespace Leetcode {

    interface Point {
        x: number;
        y: number;
    }
    function shortestPathBinaryMatrix(grid: number[][]): number {
        const queue = [];
        const size = grid.length;
        let res = 0;
        const dirArr = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
        if (grid[0][0] === 1 || grid[size - 1][size - 1] === 1) {
            return -1;
        }
        queue.push({x: 0, y: 0})
        while (queue.length > 0) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                let curNode = queue[0];
                if (curNode.x === size - 1 && curNode.y === size - 1) {
                    return res + 1;
                }
                for (const dir of dirArr) {
                    let gp: Point = {
                        x: curNode.x + dir[0],
                        y: curNode.y + dir[1]
                    }
                    if (gp.x < 0 || gp.x >= size || gp.y < 0 || gp.y >= size) {
                        continue;
                    }
                    if (grid[gp.x][gp.y] === 1) {
                        continue;
                    }
                    queue.push(gp);
                    // 由于grid[x][y] = 1代表不通过，所以可以不需要额外空间来保存遍历过的位置
                    grid[gp.x][gp.y] = 1;
                }
                queue.shift()
            }
            res++;
        }
        return -1;
    
    
    };
    
    
    console.log('',shortestPathBinaryMatrix([[1,1,0,1],
        [1,0,1,0],
        [1,1,1,1],
        [1,0,1,1]]));
    
    
    
     
    
    
}
