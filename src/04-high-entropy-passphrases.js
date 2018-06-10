module.exports = {
    hasNoDuplicate,
    hasNoAnagram,
    solve
};

function hasNoDuplicate(passphrase) {
    let words = passphrase.split(" ");
    let counts = {};
    words.forEach( word => {
        if(! counts[word]){
            counts[word]=0;
        }
        counts[word]++
    } );
    return Object.keys(counts).every(word => counts[word] === 1);
}

function hasNoAnagram(passphrase) {
    let words = passphrase.split(" ");
    words = words.map(word => {
        let letters = [...word];
        // sorting the letters and making it a word again
        letters = letters.sort((a,b)=>a>b).join("");
        return letters;
    }).join(" ");
    return hasNoDuplicate(words);
}

function solve(){
    const myInput = require("fs").readFileSync("data/04-high-entropy-passphrases.txt").toString();

    const allPassphrases = myInput.split(/\n/);

    const part1 = allPassphrases.filter(hasNoDuplicate).length;
    const part2 = allPassphrases.filter(hasNoAnagram).length;

    console.log("--- Day 4: High-Entropy Passphrases ---");
    console.log(`Puzzle answer : ${part1}`);
    console.log("--- Part Two ---");
    console.log(`Puzzle answer : ${part2}`);
    console.log();
}