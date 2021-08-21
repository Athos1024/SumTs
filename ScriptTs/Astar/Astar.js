var easystarjs = require('easystarjs');
var easystar = new easystarjs.js();
var grid = [[0, 0, 1, 0, 0],
[0, 0, 1, 0, 0],
[0, 0, 1, 0, 0],
[0, 0, 1, 0, 0],
[0, 0, 0, 0, 0]];
easystar.setGrid(grid);
easystar.setAcceptableTiles([0]);
easystar.findPath(0, 0, 4, 0, function (path) {
    if (path === null) {
        console.log("Path was not found.");
    } else {
        for (let i = 0; i < path.length; i++) {
            console.log(`x = ${path[i].x} y = ${path[i].y}`);
        }
    }
});
easystar.calculate();