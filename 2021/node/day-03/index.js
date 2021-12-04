import { readFileByLine, columnize } from "../utils/input.js";
import { printBanner } from "../utils/print.js";

const part1 = async function(showWork = false) {
    // output banner
    printBanner('Day 3, Part I');

    // read input and group into columns
    const fileURL = new URL(`./input.txt`, import.meta.url);
    const rawData = await readFileByLine(fileURL);
    const columizedData = columnize(rawData);

    if(showWork) {
        console.log(columizedData);
    }

    // gamma and epsilon bit counts
    let gamma = '';
    let epsilon = '';

    columizedData.forEach( column => {
        let zeros = 0;
        let ones = 0;

        for (const bit of column) {
            if(bit == '0') {
                zeros++;
            }
            else {
                ones++;
            }
        }

        // most common bit is added to gamma, least common to epsilon
        if(zeros > ones) {
            gamma += '0';
            epsilon += '1';
        }
        else {
            gamma += '1';
            epsilon += '0';
        }
    });

    if(showWork) {
        console.log(`Gamma (Binary)  : ${gamma}`);
        console.log(`Epsilon (Binary): ${epsilon}`);
    }

    // convert and multiply for answer
    const gammaVal = parseInt(gamma, 2);
    const epsilonVal = parseInt(epsilon, 2);
    const answer = gammaVal * epsilonVal;

    // output answer
    console.log(`\nGamma: ${gammaVal}\nEpsilon: ${epsilonVal}\n\nAnswer: ${answer}`);
}

const part2 = async function(showWork = false) {
    console.log("part 2");
}

await part1(true);
await part2();