import pokerCardAnalyser, { isBrelan, handBrelan, handSuite, isSuite } from "./pokerCardAnalyser.js";
import { describe, it, expect } from "vitest";

describe("pokerCardAnalyser", () => {
    it("should return the correct result for a brelan", () => {
        expect(isBrelan(handBrelan)).toStrictEqual([true, 30]);
    })
    it("should return the correct result for a Suite", () => {
        expect(isSuite(handSuite)).toStrictEqual([true, 40]);
    })
});