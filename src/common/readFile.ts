import * as fs from 'fs';
import * as path from 'path';

export function readInput(fileName: string): string[] {
    return fs.readFileSync(path.join(__dirname, `../../inputs/${fileName}`)).toString().split('\n');
}