module.exports = {
    doAStep,
    detectLoop,
    findLoopSize,
    solve
};

function solve(){
    const memory = [5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6];

    const part1 = detectLoop(memory);
    const part2 = findLoopSize(memory);

    console.log("--- Day 6: Memory Reallocation ---");
    console.log(`Puzzle answer : ${part1}`);
    console.log("--- Part Two ---");
    console.log(`Puzzle answer : ${part2}`);
    console.log();
}


function doAStep(input){
    // copying memory
    const memory = Array.of(...input);

    // find the memory block with most blocks
    const maxBlocks = Math.max(...memory);
    let blockIndex = memory.findIndex(element => element === maxBlocks);

    // empty block
    memory[blockIndex] = 0;

    let blockCount = maxBlocks;
    let index = (blockIndex + 1) % memory.length;
    while(blockCount > 0){
        memory[index]++;
        blockCount--;
        index = (index + 1) % memory.length;
    }

    return memory;
}

function detectLoop(input){
    let memory = Array.of(...input);

    let count = 0;

    let history = [];

    history.push(memory.join("-"));

    while(true){
        count++;
        memory = doAStep(memory);

        if(history.includes(memory.join("-"))){
            return count;
        }

        history.push(memory.join("-"));
    }
}

function findLoopSize(input){
    let memory = Array.of(...input);

    let count = 0;

    let history = [];

    history.push(memory.join("-"));

    while(true){
        count++;
        memory = doAStep(memory);

        let index = history.indexOf(memory.join("-"));
        if(index !== -1){
            return count - index;
        }

        history.push(memory.join("-"));
    }
}


