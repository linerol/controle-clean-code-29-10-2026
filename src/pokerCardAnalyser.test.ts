import pokerCardAnalyser, { isBrelan, handBrelan } from "./pokerCardAnalyser.js";
import { describe, it, expect } from "vitest";

describe("pokerCardAnalyser", () => {
    it("should return the correct result for a brelan", () => {
        expect(isBrelan(handBrelan)).toStrictEqual([true, 30]);
    })    
});