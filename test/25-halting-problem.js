let expect = require("chai").expect;

let myInput = require("../data/25-halting-problem.txt");

const {diagnosticChecksum} = require("../src/25-halting-problem");

describe("halting-problem", () => {

    let sampleBlueprint = {
        "A": {
            "0": {"write": "1", "move": "right", "nextState": "B"},
            "1": {"write": "0", "move": "left", "nextState": "B"}
        },
        "B": {
            "0": {"write": "1", "move": "left", "nextState": "A"},
            "1": {"write": "1", "move": "right", "nextState": "A"}
        }
    };

    describe("part-one", () => {

        const expectedChecksums = [
            {"steps": 1, "checksum": 1},
            {"steps": 2, "checksum": 2},
            {"steps": 3, "checksum": 1},
            {"steps": 4, "checksum": 2},
            {"steps": 5, "checksum": 3},
            {"steps": 6, "checksum": 3},
        ];

        expectedChecksums.forEach(({steps, checksum}) => {
            it(`should have a checksum of ${checksum} after ${steps} step`, () => {
                expect(diagnosticChecksum(sampleBlueprint, steps)).to.equal(checksum);
            });
        });

        it("should give me an answer", () => {
            console.log(diagnosticChecksum(myInput, 12261543));
        }).timeout(10000);

    });

});