module.exports = {
    checksum,
    maxAndMinDifference,
    divideEnvenlyDivisible
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
