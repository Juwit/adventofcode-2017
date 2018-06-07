module.exports = {
    doAStep,
    exitMaze,
    increment,
    incrementStrange,
    solve
};

function solve(){
    let myInput = require("fs").readFileSync("data/05-maze-trampolines.txt").toString();
    // rebuilding array of ints
    let maze = myInput.split("\n").map(s => Number(s));

    const part1 = exitMaze(maze, increment);
    const part2 = exitMaze(maze, incrementStrange);

    console.log("--- Day 5: A Maze of Twisty Trampolines, All Alike ---");
    console.log(`Puzzle answer : ${part1}`);
    console.log("--- Part Two ---");
    console.log(`Puzzle answer : ${part2}`);
}


function doAStep(offsets, cursor, fun){
    let jump = offsets[cursor];
    offsets[cursor] = fun(offsets[cursor]);
    return cursor + jump;
}

function exitMaze(maze, fun){
    let cursor = 0;
    let steps = 0;
    while(cursor < maze.length){
        cursor = doAStep(maze, cursor, fun);
        steps++;
    }
    return steps;
}

function increment(val){
    return val+1;
}

function incrementStrange(val){
    if(val >= 3){
        return val - 1;
    }
    return val + 1;
}
