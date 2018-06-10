let expect = require("chai").expect;

const {doAStep, detectLoop, findLoopSize} = require("../src/06-memory-reallocation");

describe("--- Day 6: Memory Reallocation ---", () => {

    const memory = [0, 2, 7, 0];

    describe("--- Part One ---", () => {

        const steps = [
            [0, 2, 7, 0],
            [2, 4, 1, 2],
            [3, 1, 2, 3],
            [0, 2, 3, 4],
            [1, 3, 4, 1],
            [2, 4, 1, 2]
        ];

        steps.forEach((expectedReallocation, stepsCount) => {
            it(`should equal ${expectedReallocation} after ${stepsCount} steps`, () => {
                let reallocated = memory;
                for(let i = 0; i < stepsCount; i++){
                    reallocated = doAStep(reallocated);
                }
                expect(reallocated).to.deep.equal(expectedReallocation);
            });

        });

        it("should detect a loop after 5 steps", () => {
            expect(detectLoop(memory)).to.equal(5);
        });

    });

    describe("--- Part Two ---", () => {
        it("should detect a loop size of 4", () => {
            expect(findLoopSize(memory)).to.equal(4);
        })
    })

});
