//Write a function that calculates the factorial of a number recursively

let numArr = [];

function factorials(n) {
    if (n > 0) {
        numArr.push(n);
        //console.log(numArr);
        n = n - 1;
        factorials(n);
    }
    else {
        //console.log(numArr);
        let product = numArr.reduce(function (a, b) {
            return a * b;
        }, 1);
        console.log(product);
    }
}

//factorials(5);
//factorials(3);
//factorials(1);
factorials(0);