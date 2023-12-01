import { partOne, partTwo } from ".";
import { readInput } from "../../common/readFile";

describe("Day 01 test", () => {
    it('should execute part 1 on test input', () => {
        const one = partOne(readInput("day01_test.txt"));
        expect(one).toEqual(142);
    });

    it('should execute part 2 on test input', () => {
        const two = partTwo(readInput("day01_test_part2.txt"));
        expect(two).toEqual(281);
    });
});