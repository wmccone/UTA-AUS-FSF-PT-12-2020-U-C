function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  return str.split("").reverse().join("")
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  const strSplit = str.split("")
  const strReverse = strSplit.reverse()
  const strJoin = strReverse.join("")
  if(str === strJoin){
    return false
  }
  else true
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
  const string = str.split(" ");
  const cased = []
  string.map((word) => {
    cased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  })
  return cased.join(" ");
};

module.exports = Algo;
