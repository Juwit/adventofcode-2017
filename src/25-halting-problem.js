module.exports = {
    diagnosticChecksum
};

function diagnosticChecksum(blueprint, stepsCount) {
    let ribbon = [];
    // making a ribbon having the length equal to the double of the steps count
    // in case whe only move one-way
    for(let i = 0; i < stepsCount*2; i++){
        ribbon.push("0");
    }
    // starting in the middle
    let position = ribbon.length / 2;
    let currentState = "A";

    function doAStep(){
        // getCurrent value
        let currentValue = ribbon[position];

        // get blueprint instructions for current value
        let {write, move, nextState} = blueprint[currentState][currentValue];

        // write blueprint instruction
        ribbon[position] = write;

        // move to next position
        if(move === "right"){
            position++;
        }
        else{
            position--;
        }

        currentState = nextState;
    }

    for(let i = 0; i < stepsCount; i++){
        doAStep();
    }

    // calculate checksum
    return ribbon.filter(item => item === "1").length;
}
