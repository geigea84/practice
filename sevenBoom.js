// https://edabit.com/challenge/6R6gReGTGwzpwuffD

function sevenBoom(arr) {
    let string = arr.join('');

    if (string.includes("7")) {
        console.log("Boom!");
    } else {
        console.log("there is no 7 in the array");
    }
}

sevenBoom([1, 2, 3, 4, 5, 6, 7]) // "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) // "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) // "Boom!"
// 97 contains the number seven.
