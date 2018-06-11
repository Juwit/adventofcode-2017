module.exports = {
    findBottom,
    solve
};

function solve(){
    const input = require("fs").readFileSync("./data/07-recursive-circus.txt").toString();

    const part1 = findBottom(input);
    //const part2 = findLoopSize(memory);

    console.log("--- Day 7: Recursive Circus ---");
    console.log(`Puzzle answer : ${part1}`);
    //console.log("--- Part Two ---");
    //console.log(`Puzzle answer : ${part2}`);
    console.log();
}


function findBottom(input){
    // the bottom program is the only one which name is on one line

    let programLines = input.split("\n");

    let line = programLines.find( line => {
        // the name of the program is the first four chars
        programName = line.split(" ")[0];
        let count = 0;
        programLines.forEach(prog => {
            if(prog.includes(programName)){
                count++;
            }
        });
        if(count === 1){
            return true;
        }
    });

    return line.split(" ")[0];
}



solve();