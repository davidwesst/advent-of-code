import { readFileByLine } from "../utils/input.js";
import { printBanner } from "../utils/print.js";

/**
 * Day 2, Part I
 * @param {Boolean} showWork Print out verbose work statements as it goes.
 */
const part1 = async function (showWork = false) {
    // read input
    const fileURL = new URL(`./input.txt`, import.meta.url);
    const rawCommandData = await readFileByLine(fileURL);

    // parse the commands
    let commands = [];
    for (let index = 0; index < rawCommandData.length; index++) {
        const element = rawCommandData[index].split(' ');

        const command = { 
            instruction: element[0],
            delta: parseInt(element[1])
        };
        commands.push(command);

        if(showWork) {
            console.log(command);
        }
    }

    // calculate depth and horizontal movement
    let depth = 0;
    let horizontal = 0;

    commands.forEach(c => {
        switch (c.instruction) {
            case 'forward':
                horizontal += c.delta;
                break;
            case 'up':
                depth -= c.delta;
                break;
            case 'down':
                depth += c.delta;
                break;
            default:
                console.error(`Not built to handle ${c.instruction}`);
                break;
        }

        if(showWork) {
            console.log(`(${c.instruction} ${c.delta}) : H = ${horizontal} D = ${depth}`);
        }
    });

    // output the values
    console.log(`Horizontal: ${horizontal}`);
    console.log(`Depth:    : ${depth}`);
    console.log(`Answer    : ${horizontal * depth}`);
}

/**
 * Day 2, Part I
 * @param {Boolean} showWork Print out verbose work statements as it goes.
 */
const part2 = (showWork = false) => {
    console.log("part 2");
}

// run
part1(true);
part2();
