import { readFileByLine, columnize } from "../utils/input.js";
import { printBanner } from "../utils/print.js";

/**
 * Get the most common bit from the string of binary characters
 * @param {String} binaryChars 
 * @returns {Number} 0,1 depending on most common bit. -1 if equal (i.e. no common bit)
 */
function mostCommonBit(binaryChars) {
    let zeros = 0;
    let ones = 0;

    for (const bit of binaryChars) {
        if(bit == '0') {
            zeros++;
        }
        else {
            ones++;
        }
    }

    // most common bit numbers are kept
    if(zeros > ones) {
        return 0;
    }
    else if(zeros < ones) {
        return 1;
    }
    else {
        return -1;
    }
}

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
    // output banner
    printBanner('Day 3, Part I');

    // read input and group into columns
    const fileURL = new URL(`./input.txt`, import.meta.url);
    const rawData = await readFileByLine(fileURL);
    const columizedData = columnize(rawData);

    if(showWork) {
        console.log(columizedData);
    }
    
    // oxygen generator rating
    let o2rating = [...rawData];
    columizedData.forEach( (element, index) => {
        // trim values based on most common bit
        const commonBit = mostCommonBit(element);

        if(commonBit == 1 || commonBit == -1) {
            // trim the zeros, because 1 is most common
            o2rating = o2rating.filter(value => value.charAt(index) == '1');
        }
        else {
            // trim the ones
            o2rating = o2rating.filter(value => value.charAt(index) == '0');
        }

        if(showWork) {
            console.log(`Most Common Bit: ${commonBit}, Index: ${index}`);
            console.log(o2rating);
        }
    });

    // 
}

await part1();
await part2(true);