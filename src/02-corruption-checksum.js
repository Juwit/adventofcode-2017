module.exports = {
    checksum,
    maxAndMinDifference,
    divideEnvenlyDivisible,
    solve
};

function checksum(data, func){
    let sum = 0;

    // splitting strings using a regex
    let lines = data.split(/\r?\n/);
    lines = lines.map( line => line.split(/\t/));

    lines.forEach( line => {
        line = line.map(val => parseInt(val));

        sum += func(line);
    });

    return sum;
}

function maxAndMinDifference(line){
    let max = Math.max(...line);
    let min = Math.min(...line);
    return max - min;
}

function divideEnvenlyDivisible(numbers){
    let result;
    numbers.forEach(x => {
        numbers.forEach(y => {
            if( x !== y && x%y === 0){
                result = x/y;
            }
        })
    });
    return result;
}

function solve(){
    let myInput = require("fs").readFileSync("data/02-corruption-checksum.txt").toString();

    const part1 = checksum(myInput, maxAndMinDifference);
    const part2 = checksum(myInput, divideEnvenlyDivisible);

    console.log("--- Day 2: Corruption Checksum ---");
    console.log(`Puzzle answer : ${part1}`);
    console.log("--- Part Two ---");
    console.log(`Puzzle answer : ${part2}`);
}