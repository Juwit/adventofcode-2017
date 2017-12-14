module.exports = {
    hasNoDuplicate,
    hasNoAnagram
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