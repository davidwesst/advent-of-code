import { readFile } from 'fs/promises';

/*
    Part 1
*/
const part1 = async function(showAnalysis = false) {
    try {
        const depths = await extractDepths();

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
    const depths = await extractDepths();

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

/*
    Utilities
*/

/**
 * Extract the depth data from the file provided.
 * @returns {Array<Number>} Array of values pulled from the data file.
 */
const extractDepths = async function() {
    // extract the depth data
    const filePromise = readFile(new URL(`./input.txt`, import.meta.url), { encoding: 'utf-8'});
    const data = await filePromise;
    const depths = data.split('\n');

    return depths;
}

/**
 * Display a banner of stars and a message to mark the start of a new part.
 * @param {String} title Message to display in the banner.
 */
const printBanner = (title) => {
    console.log(`
        \n
        *****************************************************

        ${title}

        *****************************************************
        \n
    `);
}

// run it
printBanner("[Node] Day 1 - Part I");
await part1();
printBanner("[Node] Day 1 - Part II");
await part2();