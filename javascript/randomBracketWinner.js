// Random Bracket Winner

// Given a list, compares the first two entries and selects a random winner. Winner is added to the next list to be compared in the following iteration. 
// Moves on to the next two items in the list and repeats the process. Whenever there is an odd number of items in the list (and unable to compare two entries),
// the odd entry is automatically considered a winner (bye) and is added to the next list to be compared. Iterations continue until one final winner is selected.

// Example execution: `node randomBracketWinner.js util/randomBracketWinner.txt`

const fs = require('fs');
const filename = process.argv[2];
const entriesList = fs
    .readFileSync(filename, 'utf-8')
    .trim()
    .split(/\r?\n/)

function main(inputList) {
    let shuffledInputList = shuffle(inputList);
    return tournamentRoundReducer(shuffledInputList);
}

// How this works:
// Start at the end of the array
// Pick a random element from everything before it (including itself)
// Swap them
// Move left and repeat
function shuffle(array) {
    const copy = [...array];
    
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        // swap array[i] and array[j]
        [copy[i], copy[j]] = [copy[j], copy[i]]
        
    }

    return copy;
}

function tournamentRoundReducer(inputList) {
    if (inputList.length === 1) {
        let winner = inputList[0];
        console.log("Winner: " + winner);
        return winner;
    }

    let winnersList = playRound(inputList);

    tournamentRoundReducer(winnersList);
}

function playRound(array) {
    let winners = [];

    for (let i = 0; i < array.length; i += 2) {
        let a = array[i];
        let b = array[i + 1];

        if (b === undefined) {
            winners.push(a);
        } else {
            winners.push(getWinner(a, b));
        }
    }
    
    return winners;
}

function getWinner(a, b) {
    return Math.random() < 0.5 ? a : b;
}

return main(entriesList);
