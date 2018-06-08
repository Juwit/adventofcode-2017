let expect = require("chai").expect;

let {inverseCaptcha, nextSimple, nextHalfway} = require("../src/01-inverse-captcha");

describe("--- Day 1: Inverse Captcha ---", () => {

    describe("--- Part One ---", () => {

        it("should work with first exemple", () => {
            let data = "1122";
            let result = 3;
            expect(inverseCaptcha(data, nextSimple)).to.equal(result);
        });

        it("should work with second exemple", () => {
            let data = "1111";
            let result = 4;
            expect(inverseCaptcha(data, nextSimple)).to.equal(result);
        });

        it("should work with third exemple", () => {
            let data = "1234";
            let result = 0;
            expect(inverseCaptcha(data, nextSimple)).to.equal(result);
        });

        it("should work with fourth exemple", () => {
            let data = "91212129";
            let result = 9;
            expect(inverseCaptcha(data, nextSimple)).to.equal(result);
        });

    });

    describe("--- Part Two ---", () => {

        it("should work with first exemple", () => {
            let data = "1212";
            let result = 6;
            expect(inverseCaptcha(data, nextHalfway)).to.equal(result);
        });

        it("should work with second exemple", () => {
            let data = "1221";
            let result = 0;
            expect(inverseCaptcha(data, nextHalfway)).to.equal(result);
        });

        it("should work with third exemple", () => {
            let data = "123425";
            let result = 4;
            expect(inverseCaptcha(data, nextHalfway)).to.equal(result);
        });

        it("should work with fourth exemple", () => {
            let data = "123123";
            let result = 12;
            expect(inverseCaptcha(data, nextHalfway)).to.equal(result);
        });

        it("should work with fifth exemple", () => {
            let data = "12131415";
            let result = 4;
            expect(inverseCaptcha(data, nextHalfway)).to.equal(result);
        });
    })

});