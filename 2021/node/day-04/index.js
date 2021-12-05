import { readFileByLine } from '../utils/input.js';
import { printBanner } from '../utils/print.js';

/*
    HELPER METHODS
*/

/**
 * Check rows, columns, and diagonals for all negatives
 * @param {Array<Array<Number>>} bingoCard 
 */
function isWinner(bingoCard) {
    // check rows
    for (const row of bingoCard) {
        if(row.every(number => number < 0)) {
            return true;
        }
    }

    // check columns
    for (let col = 0; col < 5; col++) {
        if(bingoCard[0][col] < 0
            && bingoCard[1][col] < 0
            && bingoCard[2][col] < 0
            && bingoCard[3][col] < 0
            && bingoCard[4][col] < 0) {
                return true;
            }
    }

    // // check diagonals
    // if(bingoCard[0][0] < 0
    //     && bingoCard[1][1] < 0
    //     && bingoCard[2][2] < 0
    //     && bingoCard[3][3] < 0
    //     && bingoCard[4][4] < 0) {
    //         return true;
    //     }
    // if(bingoCard[0][4] < 0
    //     && bingoCard[1][3] < 0
    //     && bingoCard[2][2] < 0
    //     && bingoCard[3][2] < 0
    //     && bingoCard[4][0] < 0) {
    //         return true;
    //     }

    // otherwise...
    return false;
}


/*
    MAIN PROGRAM
*/

const part1 = async function(showWork = false) {
    printBanner('Day 04, Part I');

    // read file
    const fileURL = new URL(`./input.txt`, import.meta.url);
    const fileInput = await readFileByLine(fileURL);

    // parse input
    const numbersDrawn = fileInput[0].split(',');
    //const bingoCardRowRegex = /\d+\s/g;

    let bingoCards = [];
    let currCard = [];
    for (let rowIndex = 2; rowIndex < fileInput.length; rowIndex++) {
        const fileRow = fileInput[rowIndex].trim();
        
        if(fileRow) {
            // if not empty then parse and add to current card
            currCard.push(fileRow.split(' ').filter(element => element != '').map(x => parseInt(x, 10)));
        }
        else {
            // card is done, so save it and push onto stack
            bingoCards.push(currCard);
            currCard = [];
        }
    }

    // run the draw
    let winningNumber = -1;
    let winningCard = undefined;

    numbersDrawn.every((number) => {
        // mark the number by making it negative
        bingoCards.every( (card, index) => {
            let markedCard = [];
            for (let bingoCardRow of card) {
                markedCard.push(bingoCardRow.map(n => (n == number) ? -n : n));  // if it's the number, negate it
            }

            if(showWork) {
                console.log(markedCard);
            }

            // check if card won
            if(isWinner(markedCard) === true) {
                winningCard = markedCard;
                winningNumber = number;
                console.log(`WINNER! Last Number Drawn: ${number}`);
                console.log(markedCard);

                return false; // exit every function
            }
            else {
                // update cards and continue
                bingoCards[index] = markedCard;
                return true; // continue the every
            }
        });

        if(winningNumber > -1) {
            return false; // exit numbersDrawn.every
        }
        else {
            return true; // continue numbersDrawn.every
        }
    });

    // calculate result
    const unmarkedNumbers = winningCard.flat().filter(elem => elem > 0);
    let unmarkedNumbersSum = 0;
    unmarkedNumbers.forEach(element => {
        unmarkedNumbersSum += element;
    });
    const answer = unmarkedNumbersSum * winningNumber;
    console.log(`Answer: ${unmarkedNumbersSum} * ${winningNumber} = ${answer}`);

}

const part2 = async function(showWork = false) {
    printBanner('Day 04, Part II');
}

await part1(true);
//await part2();