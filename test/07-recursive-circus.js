let expect = require("chai").expect;

const {findBottom} = require("../src/07-recursive-circus");

describe("--- Day 7: Recursive Circus ---", () => {

    describe("--- Part One ---", () => {

        let data = `xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`;

        it("should detect that 'tknk' is the bottom program", () => {
            expect(findBottom(data)).to.equal("tknk");
        });

    });

});
