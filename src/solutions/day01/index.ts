import { readInput } from "../../common/readFile";

const calibrationLines = readInput('day01.txt');

const getCalibrationValue = (line: string) => {
    const matches = line.match(/[0-9]/g);
    if (!matches) return 0;
    return parseInt(`${matches[0]}${matches[matches.length - 1]}`);
};

export const partOne = (lines: string[] = calibrationLines) => {
    return lines.map((line) => getCalibrationValue(line))
      .reduce((acc, value) => acc + value, 0);
}

const convertNumbersToDigits = (line: string) => {
    return line.replace(/one/g, 'o1e')
      .replace(/two/g, 't2o')
      .replace(/three/g, 't3e')
      .replace(/four/g, '4')
      .replace(/five/g, '5e')
      .replace(/six/g, '6')
      .replace(/seven/g, '7n')
      .replace(/eight/g, 'e8t')
      .replace(/nine/g, 'n9e');
}

export const partTwo = (lines: string[] = calibrationLines) => {
    return lines.map((line) => getCalibrationValue(convertNumbersToDigits(line)))
      .reduce((acc, value) => acc + value, 0);
};

console.log(partOne()); // 53651
console.log(partTwo()); // 53894