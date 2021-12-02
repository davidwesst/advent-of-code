import { readFile } from 'fs/promises';

/**
 * Extract the depth data from the file provided.
 * @param {String} fileURL The URL of the file (local or remote) to be read.
 * @returns {Array<Number>} Array of values pulled from the data file.
 */
export async function readFileByLine(fileURL) {
    const filePromise = readFile(fileURL, { encoding: 'utf-8'});
    const data = await filePromise;
    const lines = data.split('\n');

    return lines;
}