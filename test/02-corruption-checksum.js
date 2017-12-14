let expect = require("chai").expect;

let {checksum, maxAndMinDifference, divideEnvenlyDivisible} = require("../src/02-corruption-checksum");

let myInput = require("fs").readFileSync("data/02-corruption-checksum.txt").toString();

describe("corruption-checksum", () => {

    describe("part-one", () => {

        it("should work with the exemple", () => {
            let data = `5	1	9	5
7	5	3
2	4	6	8`;
            let result = 18;
            expect(checksum(data, maxAndMinDifference)).to.equal(result);
        });

        it("should work for my input", () => {
            console.log(checksum(myInput, maxAndMinDifference));
        })
    });

    describe("part-two", () => {

        it("should work on exemple's first line", () => {
            expect(divideEnvenlyDivisible([5,9,2,8])).to.equal(4);
        });

        it("should work on exemple's second line", () => {
            expect(divideEnvenlyDivisible([9,4,7,3])).to.equal(3);
        });

        it("should work on exemple's third line", () => {
            expect(divideEnvenlyDivisible([3,8,6,5])).to.equal(2);
        });

        it("should work with exemple", () => {
            let data = `5	9	2	8
9	4	7	3
3	8	6	5`;
            expect(checksum(data, divideEnvenlyDivisible)).to.equal(9);
        });

        it("should work with my input", () => {
            console.log(checksum(myInput, divideEnvenlyDivisible));
        });


    });

});