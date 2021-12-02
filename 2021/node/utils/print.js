/**
 * Display a banner of stars and a message to mark the start of a new part.
 * @param {String} title Message to display in the banner.
 */
 export const printBanner = (title) => {
    console.log(`
        \n
        *****************************************************

        ${title}

        *****************************************************
        \n
    `);
}