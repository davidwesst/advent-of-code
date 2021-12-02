import { readFileByLine } from '../utils/input.js';
import { printBanner } from '../utils/print.js';

/*
    Part 1
*/
const part1 = async function(showAnalysis = false) {
    try {
        const fileURL = new URL(`./input.txt`, import.meta.url);
        const depths = await readFileByLine(fileURL);

        let increasedDepthCount = 0;
        let decreasedDepthCount = 0;
    
        // analyze the data
        for (let index = 1; index < depths.length; index++) {
            const element = parseInt(depths[index]);
            const prevElement = parseInt(depths[index-1]);
    
            if(!Number.isNaN(element) && !Number.isNaN(prevElement)) {
                if(element < prevElement) {
                    decreasedDepthCount++;
                    if(showAnalysis)
                        console.log(`${element} (decreased)`);
                }
                else {
                    increasedDepthCount++;
                    if(showAnalysis)
                        console.log(`${element} (increased)`);
                }
            }
        }
    
        // display the results
        console.log(`Increased: ${increasedDepthCount}`);
        console.log(`Decreased: ${decreasedDepthCount}`);
    
    } catch (err) {
        console.error(err);
    }
}

/*
    Part 2
*/
const part2 = async function(showAnalysis = false) {
    const fileURL = new URL(`./input.txt`, import.meta.url);
    const depths = await readFileByLine(fileURL);

    let sums = [];

    // get all the sums
    for (let index = 0; index < depths.length; index++) {
        const depth0 = parseInt(depths[index - 2]);
        const depth1 = parseInt(depths[index - 1]);
        const depth2 = parseInt(depths[index]);

        sums.push(depth0 + depth1 + depth2);
    }

    let increasedDepthCount = 0;
    let noChangeDepthCount = 0;
    let decreasedDepthCount = 0;

    // analyze the sums
    for (let index = 1; index < sums.length; index++) {
        const element = sums[index];
        const prevElement = sums[index-1];

        if(!Number.isNaN(element) && !Number.isNaN(prevElement)) {
            if(element < prevElement) {
                decreasedDepthCount++;
                if(showAnalysis)
                    console.log(`${element} (decreased)`);
            }
            else if (element > prevElement) {
                increasedDepthCount++;
                if(showAnalysis)
                    console.log(`${element} (increased)`);
            }
            else {
                noChangeDepthCount++;
                if(showAnalysis)
                    console.log(`${element} (no change)`)
            }
        }
    }

    // display the results
    console.log(`Increased: ${increasedDepthCount}`);
    console.log(`No Change: ${noChangeDepthCount}`);
    console.log(`Decreased: ${decreasedDepthCount}`);
}

// run it
printBanner("[Node] Day 1 - Part I");
await part1();
printBanner("[Node] Day 1 - Part II");
await part2();