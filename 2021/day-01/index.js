import { readFile } from 'fs/promises';

try {
    // extract the depth data
    const filePromise = readFile(new URL(`./input.txt`, import.meta.url), { encoding: 'utf-8'});
    const data = await filePromise;
    const depths = data.split('\n');
    console.log(depths);

    // analyze the data

    // display the results
} catch (err) {
    console.error(err);
}