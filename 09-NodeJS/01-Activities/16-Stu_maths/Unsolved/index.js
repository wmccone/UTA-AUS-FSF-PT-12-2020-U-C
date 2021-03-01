// TODO: Import `maths.js`
const { difference, product, quotient } = require('./maths.js');
const maths = require('./maths.js');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

let operation = process.argv[2]
let numOne = parseInt(process.argv[3])
let numTwo = parseInt(process.argv[4])

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
let x

switch (operation) {
    case 'sum':
        x = maths.sum(numOne, numTwo);
        break;
    case 'difference':
        x = maths.difference(numOne, numTwo);
        break;
    case 'product':
        x = maths.product(numOne, numTwo);
        break;
    case 'quotient':
        x = maths.quotient(numOne, numTwo);
        break;
        
}

console.log(x)
