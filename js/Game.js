

class Game {
    constructor() {
        this.phrases = [new Phrase("die with memories not dreams"),
                        new Phrase ("aspire to inspire before we expire"),
                        new Phrase ("every moment is a fresh beginning"),
                        new Phrase ("love For All Hatred For None"),
                        new Phrase ("change the world by being yourself")];  
        this.missed = 0;
        this.activePhrase = null;
    }

    //get and display phrase to begin game
    startGame() {
        document.getElementById("overlay").style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    //get random phrase from array and generate new phrase
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.round(Math.random()*4)];
        return randomPhrase;
    }

    //loop through letter to display correct letters, show keys selected as chosen or wrong,
    //handle missed items and endgame conditions
    handleInteraction(letter) {
       let keys = document.getElementsByClassName('key'); 
        
         if(this.activePhrase.showMatchedLetter(letter)) {
            for(let i = 0; i < keys.length; i++) {
                if(keys[i].textContent == letter) {
                    keys[i].classList.add("chosen");
                }
            }
             if(this.checkForWin()) {
                 this.gameOver();
             }
         } else {
            for(let i = 0; i < keys.length; i++) {
                if(keys[i].textContent == letter) {
                    if(!keys[i].disabled) {
                        this.removeLife();
                    }
                    keys[i].disabled = true;
                    keys[i].classList.add("wrong");
                }
            }
             
        }
    }
    
    //change heart icon to missed state and increment "missed" property
    removeLife() {
        let hearts = document.getElementsByClassName('tries');
        for(let i = 0; i < hearts.length; i++) {
            if(hearts[i].firstElementChild.getAttribute('src') == `images/liveHeart.png`) {
                hearts[i].firstElementChild.setAttribute('src', `images/lostHeart.png`);
                this.missed++;
                if(this.missed >= 5) {
                    this.gameOver();
                }
                return true;
            }
            
        } 
    }
    
    //verify that all letters are displayed, indicating win condition
    checkForWin() {
        if(document.getElementsByClassName('hide').length == 0) {
            return true;
        } else {
            return false;
        }
    }

    //handle endgame and display overlay for either win or lose condition
    gameOver() {
        let overlay = document.getElementById("overlay");
        overlay.style.display = 'block';
        if(this.checkForWin()) {
            overlay.firstElementChild.nextElementSibling.textContent = "You have won the game!";
            overlay.classList = "";
            overlay.classList.add('win');
        } else {
            overlay.firstElementChild.nextElementSibling.textContent = "You have lost the game. Please try again.";
            overlay.classList = "";
            overlay.classList.add('lose');
        }
    }
    }