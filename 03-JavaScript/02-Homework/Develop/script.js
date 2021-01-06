// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var charSets = {
    lettrs: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numbs: ["0","1","2","3","4","5","6","7","8","9"],
    special: ["!","@","#","$","%","&","*","^","~","*"],
  }
// Prompt User to select the length of the password between 8 and 128 characters
// Allow user to select a variable between 8 and 128
  var passLen = prompt("Welcome to the password generator, the password will be between 8 and 128 characters. Please choose how long you wish your password to be")
  // If the user selects less than 8 prompt them to try again
  if (passLen < 8){
    alert("You must choose 8 or more characters, try again")
  }
  // If the user selects more than 128 have them try again
  else if(passLen > 128){
    alert("You must choose 128 or less characters, try again")
  }
  // else create the password with the variable in the loop finishing after x times
  else {

    
    // prompt user to choose whether they want lowercase
    var charLower = confirm("Would you like lowercase letters in your password?")
    // prompt user to choose whether they want uppercase
    var charUpper = confirm("Would you like lowercase letters in your password?")
    // prompt user to choose if they want numbers
    var charNumber = confirm("Would you like lowercase letters in your password?")
    // prompt user to choose if they want special characters
    var charSpecial = confirm("Would you like lowercase letters in your password?")

    // parseInt(passLen)
    // for (var i = 0; i < passLen; i++){

    // }
  } 


  


}









// if lowercase is true run a random on array .tolowercase
// if upercase is true run a random on array .to uppercase
// if numbers is true run a random on 0-9
// if special is true run a random on a special characters array
// randomize the order of the final password



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
