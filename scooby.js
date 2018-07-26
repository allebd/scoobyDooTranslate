//Assign variables
const translateForm = document.getElementById("translateForm");
const myWord = document.getElementById("myWord");
const scoobyTranslation = document.getElementById("scoobyTranslation");

//Function to translate on submit
translateForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let myWordVal = myWord.value;
  makeTranslation(myWordVal);
});

//Function to make translation
function makeTranslation(myWordVal) {
  let vowels = ["a", "e", "i", "o", "u"]; //Array of Vowels
  let scoobyWord = []; //Stores Scooby's Words
  let theWord = myWordVal.trim();
  if (theWord === "") {
    displayTranslation(theWord);
  } else {
    let allWords = theWord.toLowerCase().split(" ");
    for (let i = 0; i < allWords.length; i++) {
      let eachWord = allWords[i].split("");
      let eachWordLength = eachWord.length;
      let theCounter = 0;
      for (let j = 0; j < eachWordLength; j++) {
        let firstCharacter = eachWord[0];
        if (vowels.includes(firstCharacter)) {
          scoobyWord.push(eachWord.join(""));
          break;
        } else {
          let eachCharacter = eachWord[j];
          if (vowels.includes(eachCharacter)) {
            theCounter++;
            if (theCounter === 1) {
              let newWord = "r" + eachWord.slice(j).join("");
              scoobyWord.push(newWord);
              break;
            }
          }
          if (j + 1 === eachWordLength) {
            scoobyWord.push("r");
            break;
          }
        }
      }
    }
    displayTranslation(scoobyWord);
  }
}

//function to display translation
function displayTranslation(theWord) {
  if (theWord === "") {
    scoobyTranslation.value = "No text inputted.";
  } else {
    let scoobyWords = theWord.join(" ");
    scoobyTranslation.value = scoobyWords;
  }
}