import pokerCardAnalyser, { isBrelan, handBrelan, handSuite, isSuite, isColor, handColor, isQuinteFlush, isCarre } from "./pokerCardAnalyser.js";
import type { Hand } from "./pokerCardAnalyser.js";
import { describe, it, expect } from "vitest";

const handPair: Hand = {
    cards: [
        { value: 8, sign: 1 },
        { value: 8, sign: 2 },
        { value: 2, sign: 3 },
        { value: 5, sign: 4 },
        { value: 14, sign: 1 },
    ],
};

const handSuiteSeule: Hand = {
    cards: [
        { value: 10, sign: 1 },
        { value: 11, sign: 2 },
        { value: 12, sign: 3 },
        { value: 13, sign: 4 },
        { value: 14, sign: 1 },
    ],
};

const handColorSeule: Hand = {
    cards: [
        { value: 2, sign: 1 },
        { value: 4, sign: 1 },
        { value: 6, sign: 1 },
        { value: 8, sign: 1 },
        { value: 10, sign: 1 },
    ],
};

const handCarre: Hand = {
    cards: [
        { value: 9, sign: 1 },
        { value: 9, sign: 2 },
        { value: 9, sign: 3 },
        { value: 9, sign: 4 },
        { value: 2, sign: 1 },
    ],
};

describe("pokerCardAnalyser", () => {
    it("should return the correct result for a brelan", () => {
        expect(isBrelan(handBrelan)).toStrictEqual([true, 30]);
    })
    it("should return the correct result for a Suite", () => {
        expect(isSuite(handSuite)).toStrictEqual([true, 40]);
    })
    it("should return the correct result for a Color", () => {
        expect(isColor(handColor)).toStrictEqual([true, 45]);
    })
    it("should return the correct result for a Quinte Flush", () => {
        expect(isQuinteFlush(handColor)).toStrictEqual([true, 80]);
    })
    it("should return the correct result for a Carre", () => {
        expect(isCarre(handCarre)).toStrictEqual([true, 60]);
    })

    it("should score a pair at 0", () => {
        expect(pokerCardAnalyser([handPair])).toBe(0);
    })
    it("should score a brelan at 30", () => {
        expect(pokerCardAnalyser([handBrelan])).toBe(30);
    })
    it("should score a suite at 40", () => {
        expect(pokerCardAnalyser([handSuiteSeule])).toBe(40);
    })
    it("should score a color at 45", () => {
        expect(pokerCardAnalyser([handColorSeule])).toBe(45);
    })
    it("should score a carre at 60", () => {
        expect(pokerCardAnalyser([handCarre])).toBe(60);
    })
    it("should score a quinte flush as a color", () => {
        expect(pokerCardAnalyser([handColor])).toBe(45);
    })
    it("should sum the points of every hand", () => {
        expect(pokerCardAnalyser([handPair, handBrelan, handSuiteSeule, handColorSeule, handCarre])).toBe(175);
    })
});