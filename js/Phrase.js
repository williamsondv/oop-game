

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

     //loop through phrase and add all letters and spaces to page
     addPhraseToDisplay() {
         let ul = document.getElementById('phrase').firstElementChild;
         let letter = "";
         for(let i = 0; i < this.phrase.length; i++) {
             letter = this.phrase[i];
             if(letter == " ") {
                 letter = "space"
                 ul.innerHTML += `<li class = '${letter}'> </li>`;
             } else {
             ul.innerHTML +=`<li class = 'hide letter ${letter}'>${letter}</li>`;
             }
         }
     }

    //verify that the letter passed in is present in the current phrase
     checkLetter(letter) {
         for(let i = 0; i < this.phrase.length; i++) {
             if(letter == this.phrase[i]) {
                 return true;
             } else {
                 return false;
             }
         }
     }

    //loop through letter list items and display correctly matched letters in phrase
     showMatchedLetter(letter) {
         let flag = false;
         let letters = document.getElementsByClassName(letter);
         for(let i = 0; i < letters.length; i++) {
            letters[i].classList.remove('hide');
            letters[i].classList.add('show');
            flag = true;
         }
         return flag;
     }
  }