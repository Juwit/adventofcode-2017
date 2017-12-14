let expect = require("chai").expect;

let myInput = require("fs").readFileSync("data/04-high-entropy-passphrases.txt").toString();

let {hasNoDuplicate, hasNoAnagram} = require("../src/04-high-entropy-passphrases");

describe("high-entropy-passphrases", () => {

    describe("part-one", () => {

        it("should validate aa bb cc dd ee", () => {
            let pass = "aa bb cc dd ee";
            expect(hasNoDuplicate(pass)).to.be.true;
        });

        it("should not validate aa bb cc dd aa", () => {
            let pass = "aa bb cc dd aa";
            expect(hasNoDuplicate(pass)).to.be.false;
        });

        it("should not validate kpvbzf kpvbzf svyq flg shwtgp", () => {
            let pass = "kpvbzf kpvbzf svyq flg shwtgp";
            expect(hasNoDuplicate(pass)).to.be.false;
        });

        it("should validate aa bb cc dd aaa", () => {
            let pass = "aa bb cc dd aaa";
            expect(hasNoDuplicate(pass)).to.be.true;
        });

        it("should validate psg jsykdw drpqzl qzqbge ldqpzr wsdykj lmhbldv hbognjp nqej fmxoq guuf", () => {
            let pass = "psg jsykdw drpqzl qzqbge ldqpzr wsdykj lmhbldv hbognjp nqej fmxoq guuf";
            expect(hasNoDuplicate(pass)).to.be.true;
        });

        it("should give the answer", () => {
            let allPassphrases = myInput.split(/\n/);
            let valid = allPassphrases.filter(hasNoDuplicate).length;
            console.log(valid);
        });

    });

    describe("part-two", () => {

        it("should validate abcde fghij", () => {
           expect(hasNoAnagram("abcde fghij")).to.be.true;
        });

        it("should not validate abcde xyz ecdab", () => {
            expect(hasNoAnagram("abcde xyz ecdab")).to.be.false;
        });

        it("should validate a ab abc abd abf abj", () => {
           expect(hasNoAnagram("a ab abc abd abf abj")).to.be.true;
        });

        it("should validate iiii oiii ooii oooi oooo", () => {
           expect(hasNoAnagram("iiii oiii ooii oooi oooo")).to.be.true;
        });

        it("should not validate oiii ioii iioi iiio", () => {
            expect(hasNoAnagram("oiii ioii iioi iiio")).to.be.false;
        });

        it("should give the answer", () => {
            let allPassphrases = myInput.split(/\n/);
            let valid = allPassphrases.filter(hasNoAnagram).length;
            console.log(valid);
        });
    });

});