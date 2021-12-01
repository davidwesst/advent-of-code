import { readFile } from 'fs/promises';

/*
    Part 1
*/
const part1 = async function() {
    try {
        // extract the depth data
        const filePromise = readFile(new URL(`./input.txt`, import.meta.url), { encoding: 'utf-8'});
        const data = await filePromise;
        const depths = data.split('\n');
    
        let increasedDepthCount = 0;
        let decreasedDepthCount = 0;
    
        // analyze the data
        for (let index = 1; index < depths.length; index++) {
            const element = parseInt(depths[index]);
            const prevElement = parseInt(depths[index-1]);
    
            if(!Number.isNaN(element) && !Number.isNaN(prevElement)) {
                if(element < prevElement) {
                    decreasedDepthCount++;
                    console.log(`${element} (decreased)`)
                }
                else {
                    increasedDepthCount++;
                    console.log(`${element} (increased)`)
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
const part2 = async function() {
    console.log('Yay! Part II');
}

/*
    Utilities
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