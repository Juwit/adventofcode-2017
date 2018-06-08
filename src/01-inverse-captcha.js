module.exports = {
    inverseCaptcha,
    nextSimple,
    nextHalfway,
    solve
};

/**
 * Returns the next digit (circular rule)
 * @param data
 * @param index
 * @returns {*}
 */
function nextSimple(data, index){
    let next = (index + 1) % data.length;
    return data[next];
}

/**
 * Returns the next digit (halfway and circular rule)
 * @param data
 * @param index
 */
function nextHalfway(data, index){
    let length = data.length;
    let next = (index + length / 2) % length;
    return data[next];
}

/**
 * Sum of all digits that match the next one
 * @param data
 * @param next
 * @returns {number}
 */
function inverseCaptcha(data, next){
    let sum = 0;
    for(let index = 0; index < data.length; index++) {
        let digit = data[index];
        let otherDigit = next(data, index);

        if(digit === otherDigit){
            sum += parseInt(digit);
        }
    }
    return sum;
}

function solve(){
    let myInput = require("fs").readFileSync("data/01-inverse-captcha.txt").toString();

    const part1 = inverseCaptcha(myInput, nextSimple);
    const part2 = inverseCaptcha(myInput, nextHalfway);

    console.log("--- Day 1: Inverse Captcha ---");
    console.log(`Puzzle answer : ${part1}`);
    console.log("--- Part Two ---");
    console.log(`Puzzle answer : ${part2}`);
}