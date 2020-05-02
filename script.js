
var generateBtn = document.querySelector("#generate");

// generates password
function generatePassword() {
  var uppers = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowers = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specials = [" ", "\"", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
  


  var userLetters = prompt("How many characters would you like in your password?");

  if (userLetters > 7 && userLetters < 129) {
    userLetters;

  var userUppers = confirm(
    "Would you like Upper Case letters?"
  );
  var userLowers = confirm(
    "Would you like Lower Case letters?"
  );
  var userNumbers = confirm("Would you like numbers?");
  var userSpecials = confirm("Would you like special characters?");

  var possibles = [];
  
  if (userSpecials) {
    possibles.push(specials);
  }

  if (userUppers) {
    possibles.push(uppers);
  }

  if (userLowers) {
    possibles.push(lowers);
  }

  if (userNumbers) {
    possibles.push(numbers);
  }

  if (!possibles.length) {
      alert("You must chose a character!")
    
  }
  

  var password = "";

  for (var i = 0; i < userLetters; i++) {
    var randomArray =
      possibles[Math.floor(Math.random() * possibles.length)];
    
   

    var randomChar =
      randomArray[Math.floor(Math.random() * randomArray.length)];
        
    password += randomChar;
  }

  
  return password;
  } else {
    alert("Password must be 8-128 characters long");
    
  }
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generate button
generateBtn.addEventListener("click", writePassword);