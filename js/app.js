
//add eventListener for "start" button on overlay, remove phrase for replay,
//remove "chosen" and "wrong" classes from keyboard for replay, reset heart indicators
//for missed chances for replay, start new game
document.getElementById('btn__reset').addEventListener('click', function() {
    let ul = document.getElementById('phrase').firstElementChild;
    let keys = document.getElementsByClassName('key');
    let hearts = document.getElementsByClassName('tries');

    while(ul.firstElementChild) {
        ul.firstElementChild.remove();
    }
    
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.remove("chosen");
        keys[i].classList.remove("wrong");
    }
    
    for(let i = 0; i < hearts.length; i++) {
        if(hearts[i].firstElementChild.getAttribute('src') == 'images/lostHeart.png') {
            hearts[i].firstElementChild.setAttribute('src','images/liveHeart.png' );
        }
    }
    game = new Game();
    game.startGame();
});

//click listener for on-screen keyboard
document.getElementById('qwerty').addEventListener('click', function(event){
    if(event.target.classList == 'key') {
        game.handleInteraction(event.target.textContent);
    }
});

//physical keyboard listener for on-screen keyboard
document.addEventListener('keydown', function(event){
    if(event.key.match(/[a-z]/)) {
    game.handleInteraction(event.key);
    }
});