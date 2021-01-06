function getRandom(arr) {
    var randomIndex = Math.floor(Math.random()*arr.length)
    return arr[randomIndex]
}
 
var randomArray = [1,2,3,4,5,6]
 
var result = getRandom(randomArray)

