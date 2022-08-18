
// Assignment code 
var generateBtn = document.querySelector("#generate");

function randomInt(min,max) {
  return Math.floor(Math.random()*(max-min) + min)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
}

function generatePassword() {

  var userInput = window.prompt("How long do you want your password to be?")
  var passwordLength = parseInt(userInput)
  
  if (isNaN(passwordLength)) {
    window.alert("That is not a number")
    return
  } 
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password should be between 8 and 128 characters!")
    return
  }
  
   var userWantsNumbers = window.confirm("Do you want to include numbers in your password?")
   var userWantsLowercase = window.confirm("Do you want to include lowercase letters in your password?")
   var userWantsUppercase = window.confirm("Do you want to include UPPERCASE letters in your password?")
   var userWantsSymbols = window.confirm("Do you want to include symbols in your password?")

   var numberList = ['1','2','3','4','5','6','7','8','9','0']
   var lowercaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   var uppercaseList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
   var symbolList = ['$','#','%','@','*','^','&','!','(',')','[',']','?','+','/']

   var optionsCart = []

   for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
   } 

   if (userWantsNumbers === true) {
    optionsCart.push(numberList)
   }

   if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
   }

   if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
   }

   if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
   }

   var generatePassword = ""

   for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    console.log(randomChar)
   }


}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
  
}










