let expect = require("chai").expect;

const {doAStep, exitMaze, increment, incrementStrange} = require("../src/05-maze-trampolines");

describe("--- Day 5: A Maze of Twisty Trampolines, All Alike ---", () => {

    describe("--- Part One ---", () => {

        const stepsExpectedOffsets = [
            [0, 3, 0, 1, -3],
            [1, 3, 0, 1, -3],
            [2, 3, 0, 1, -3],
            [2, 4, 0, 1, -3],
            [2, 4, 0, 1, -2],
            [2, 5, 0, 1, -2],
        ];

        stepsExpectedOffsets.forEach((expectedOffsets, steps) => {
            it(`should equals ${expectedOffsets} after ${steps} steps`, () => {
                const offsets = [0, 3, 0, 1, -3];
                let cursor = 0;

                for(let i = 0; i < steps; i++){
                    cursor = doAStep(offsets, cursor, increment);
                }
                expect(offsets).to.deep.equal(expectedOffsets)
            })
        });

        it("should exit maze in 5 steps", () => {
            const offsets = [0, 3, 0, 1, -3];
            expect(exitMaze(offsets, increment)).to.equal(5);
        });

    });

});