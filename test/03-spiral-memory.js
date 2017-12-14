let expect = require("chai").expect;

let myInput = 277678;

function compute(data){
    // find the square root to find the width of the square
    let sqrt = Math.ceil(Math.sqrt(data));
    console.log(sqrt);

    let dataPosition = {
        x: 0,
        y: 0,
    };

    let onePosition = {
        x: 0,
        y: 0
    };

    // calculate the relative positions
    dataPosition.x = Math.abs((sqrt*sqrt)-data);
    dataPosition.y = sqrt;

    onePosition.x = Math.floor(sqrt / 2);
    onePosition.y = Math.floor(sqrt / 2);

    console.log(dataPosition);

    return Math.abs(onePosition.x - dataPosition.x) + Math.abs(onePosition.y - dataPosition.y) - 1;
}

describe("spiral", () => {

    it("should find the number of steps to 1", () => {
        let data = 1;
        let result = 0;
        expect(compute(data)).to.equal(result);
    });

    it("should find the number of steps to 12", () => {
        let data = 12;
        let result = 3;
        expect(compute(data)).to.equal(result);
    });

    it("should find the number of steps to 23", () => {
        let data = 23;
        let result = 2;
        expect(compute(data)).to.equal(result);
    });

    it("should find the number of steps to 35", () => {
        let data = 35;
        let result = 4;
        expect(compute(data)).to.equal(result);
    });

    it("should find the number of steps to 36", () => {
        let data = 36;
        let result = 5;
        expect(compute(data)).to.equal(result);
    });

    it("should find the number of steps to 1024", () => {
        let data = 1024;
        let result = 31;
        expect(compute(data)).to.equal(result);
    });

    it("should find the number of steps to myInput", () => {
        console.log(compute(myInput));
    });

});