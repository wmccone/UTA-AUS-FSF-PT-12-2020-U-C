var firstInput = process.argv[2]
var secondInput = process.argv[3]
var x 


if(firstInput === secondInput){
    x = true
}

else {
    x = false
}

console.log(process.argv[2]===process.argv[3])