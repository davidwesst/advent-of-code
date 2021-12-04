import { readFile } from 'fs/promises';

/**
 * Extract the depth data from the file provided.
 * @param {String} fileURL The URL of the file (local or remote) to be read.
 * @returns {Promise<Array>} Array of values pulled from the data file.
 */
export async function readFileByLine(fileURL) {
    const filePromise = readFile(fileURL, { encoding: 'utf-8'});
    const data = await filePromise;
    const lines = data.trim().split('\n');

    return Promise.resolve(lines);
}

/**
 * Transforms an array of rows into an array of columns. 
 * @param {Array<String>} rows rows of data that should be turned into columns 
 */
export function columnize(rows) {
    let transformedArray = [];

    for (let index = 0; index < rows.length; index++) {
        let currRow = rows[index];
        
        for(let col = 0; col < currRow.length; col++) {
            if(transformedArray[col] === undefined) {
                transformedArray[col] = '';
            }
            transformedArray[col] += currRow.charAt(col);
        }
    }

    return transformedArray;
}