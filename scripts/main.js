document.addEventListener('DOMContentLoaded', function() {
    showDown();
    document.getElementById("score").innerHTML = localStorage.getItem("score");
    let _score = document.getElementById("score").innerHTML
    if(_score == 0){
        document.getElementById("score").innerHTML = "0";
    }
});

function openRules() {
    let _modal = ""

    _modal +=  `<div class="modal__inner">
                    <div class="modal__overlay"></div>
                    <div class="modal__container">
                        <h1>Rules</h1>
                        <div class="modal__close" onclick="closeRules()">&#10005;</div>
                        <div class="modal__image">
                            <img src="images/image-rules-bonus.svg" alt="The mumbo jumbo"/>
                        </div>
                    </div>
                </div>`

    document.getElementById("rulesmodal").innerHTML = _modal;

    let _openAnimation = anime.timeline({
        easing: 'easeInOutExpo',
        duration: 400
    }); 
    _openAnimation.add({
        targets: '.modal__overlay',
        opacity: 0.5,
        easing: 'easeInOutExpo',
        update: function(){
            document.getElementById("rulesmodal").style.display = "block";
            document.querySelector(".modal__overlay").style.display = "block";
        }
    })
    _openAnimation.add({
        targets: '.modal__container',
        opacity: 1,
        easing: 'easeInOutExpo'
    })   
    
    let _modalOverlay = document.querySelector(".modal__overlay");  

    window.onclick = function(event){
        if (event.target == _modalOverlay) {
            console.log("here 2")
            closeRules();
        }        
    }    
}

function closeRules(){
    let _closeAnimation = anime.timeline({
        easing: 'easeInOutExpo',
        duration: 600
    });    
    _closeAnimation.add({
        targets: '.modal__overlay',
        opacity: 0,
        easing: 'easeInOutExpo',
    }, '-=800');   
    _closeAnimation.add({
        targets: '.modal__container',
        opacity: 0,
    })         
    _closeAnimation.add({
        targets: '.modal__overlay',        
        begin: function(){
            document.getElementById("rulesmodal").style.display = "none";
            document.querySelector(".modal__overlay").style.display = "none";
        }
    })

}

function showDown(){
    let _weapons = document.querySelectorAll(".arena__circle");
    let _choice = [];

    _weapons.forEach(function(_chosenWeapon) {
        let _player = _chosenWeapon.dataset.title
        _choice.push(_player)
        _chosenWeapon.addEventListener("click", function(){
            let _computer = _choice[Math.floor(Math.random()*_choice.length)];
            enterShowdown("player--" + _player + " " + "computer--" + _computer)
        });
    });
}

function enterShowdown(_player){
    _player = _player.split(" ");
    let _htmlplayer = "";
    let _htmlcomputer = "";

    for (var i = 0; i < _player.length; i++){
        let _case = _player[i];
        if (_case === "player--rock") {
            _htmlplayer +=  `<div class="showdown__player__circle showdown__player__circle--rock" data-title="rock">
                                <h3>You picked</h3>
                                <div class="showdown__player__image">
                                    <img src="images/icon-rock.svg" alt="Choose to ROCK around the clock">
                                </div>
                            </div>`
            document.querySelector(".showdown__player--selection").insertAdjacentHTML('beforeend', _htmlplayer);
        } 
        else if (_case ===  "player--paper") {
            _htmlplayer +=  `<div class="showdown__player__circle showdown__player__circle--paper" data-title="paper">
                                <h3>You picked</h3>
                                <div class="showdown__player__image">
                                    <img src="images/icon-paper.svg" alt="Choose to roll with PAPER">
                                </div>
                            </div>`
            document.querySelector(".showdown__player--selection").insertAdjacentHTML('beforeend', _htmlplayer);
        } 
        else if (_case ===  "player--scissors") {
            _htmlplayer +=  `<div class="showdown__player__circle showdown__player__circle--scissors" data-title="scissors">
                                <h3>You picked</h3>
                                <div class="showdown__player__image">
                                    <img src="images/icon-scissors.svg" alt="Choose to become a SCISSOR sister">
                                </div>
                            </div>`
            document.querySelector(".showdown__player--selection").insertAdjacentHTML('beforeend', _htmlplayer);
        } 
        else if (_case ===  "player--lizard") {
            _htmlplayer +=  `<div class="showdown__player__circle showdown__player__circle--lizard" data-title="lizard">
                                <h3>You picked</h3>
                                <div class="showdown__player__image">
                                    <img src="images/icon-lizard.svg" alt="Choose to go LIZARD like Eddie Izzard">
                                </div>
                            </div>`
            document.querySelector(".showdown__player--selection").insertAdjacentHTML('beforeend', _htmlplayer);
        } 
        else if (_case ===  "player--spock") {
            _htmlplayer +=  `<div class="showdown__player__circle showdown__player__circle--spock" data-title="spock">
                                <h3>You picked</h3>
                                <div class="showdown__player__image">
                                    <img src="images/icon-spock.svg" alt="Choose to Live long and propser - SPOCK">
                                </div>
                            </div>`
            document.querySelector(".showdown__player--selection").insertAdjacentHTML('beforeend', _htmlplayer);
        } 
        else if (_case === "computer--rock") {
            _htmlcomputer +=   `<div class="showdown__computer__circle showdown__computer__circle--rock" data-title="rock">
                                    <h3>The house picked</h3>
                                    <div class="showdown__computer__image">
                                        <img src="images/icon-rock.svg" alt="Choose to ROCK around the clock">
                                    </div>
                                </div>`
            document.querySelector(".showdown__computer--selection").insertAdjacentHTML('beforeend', _htmlcomputer);
        } 
        else if (_case ===  "computer--paper") {
            _htmlcomputer +=   `<div class="showdown__computer__circle showdown__computer__circle--paper" data-title="paper">
                                    <h3>The house picked</h3>      
                                    <div class="showdown__computer__image">
                                        <img src="images/icon-paper.svg" alt="Choose to roll with PAPER">
                                    </div>
                                </div>`
            document.querySelector(".showdown__computer--selection").insertAdjacentHTML('beforeend', _htmlcomputer);
        } 
        else if (_case ===  "computer--scissors") {
            _htmlcomputer +=   `<div class="showdown__computer__circle showdown__computer__circle--scissors" data-title="scissors">
                                    <h3>The house picked</h3>
                                    <div class="showdown__computer__image">
                                        <img src="images/icon-scissors.svg" alt="Choose to become a SCISSOR sister">
                                    </div>
                                </div>`
            document.querySelector(".showdown__computer--selection").insertAdjacentHTML('beforeend', _htmlcomputer);
        } 
        else if (_case ===  "computer--lizard") {
            _htmlcomputer +=   `<div class="showdown__computer__circle showdown__computer__circle--lizard" data-title="lizard">
                                    <h3>The house picked</h3>
                                    <div class="showdown__computer__image">
                                        <img src="images/icon-lizard.svg" alt="Choose to go LIZARD like Eddie Izzard">
                                    </div>
                                </div>`
            document.querySelector(".showdown__computer--selection").insertAdjacentHTML('beforeend', _htmlcomputer);
        } 
        else if (_case ===  "computer--spock") {
            _htmlcomputer +=   `<div class="showdown__computer__circle showdown__computer__circle--spock" data-title="spock">
                                    <h3>The house picked</h3>
                                    <div class="showdown__computer__image">
                                        <img src="images/icon-spock.svg" alt="Choose to Live long and propser - SPOCK">
                                    </div>
                                </div>`
            document.querySelector(".showdown__computer--selection").insertAdjacentHTML('beforeend', _htmlcomputer);
        } 
        else {
            // default
        }
    }

    let _beginShowdown = anime.timeline({
        easing: 'linear',
        duration: 700
    });   
    _beginShowdown.add({
        targets: '.arena',        
        opacity: 0
    }) 
    _beginShowdown.add({
        targets: '.arena',
        begin: function(){
            document.querySelector(".arena").style.display = "none";
        }        
    })  
    _beginShowdown.add({
        targets: '.showdown',
        begin: function(){
            document.querySelector(".showdown").style.display = "flex";
        }       
    })             
    _beginShowdown.add({
        targets: '.showdown',
        opacity: 1
    }) 
    _beginShowdown.add({
        targets: '.showdown__player__circle',
        left: "0px"
    })    
    _beginShowdown.add({
        targets: '.showdown__computer__circle',
        right: "0px"
    }, '-=700')    
    
    showdownResult(_player);
}

function showdownResult(_player){
    let _score = document.getElementById("score").innerHTML
    
    ///////////////////
    //Handle Draws
    ///////////////////
    if(_player[0] === "player--rock" && _player[1] === "computer--rock"){
        document.querySelector(".showdown__result h1").innerHTML = "DRAW";
        document.querySelector(".showdown__result").style.display = "block";
    }
    if(_player[0] === "player--paper" && _player[1] === "computer--paper"){
        document.querySelector(".showdown__result h1").innerHTML = "DRAW";
        document.querySelector(".showdown__result").style.display = "block";
    }
    if(_player[0] === "player--scissors" && _player[1] === "computer--scissors"){
        document.querySelector(".showdown__result h1").innerHTML = "DRAW";
        document.querySelector(".showdown__result").style.display = "block";
    }
    if(_player[0] === "player--lizard" && _player[1] === "computer--lizard"){
        document.querySelector(".showdown__result h1").innerHTML = "DRAW";
        document.querySelector(".showdown__result").style.display = "block";
    }
    if(_player[0] === "player--spock" && _player[1] === "computer--spock"){
        document.querySelector(".showdown__result h1").innerHTML = "DRAW";
        document.querySelector(".showdown__result").style.display = "block";
    }

    ////////////////////////
    // Handle Wins & Losses
    ////////////////////////

    //rock -> lizard
    //rock -> scissors

    //lizard -> spock
    //lizard -> paper

    //spock -> scissors
    //spock -> rock

    //scissors -> paper
    //scissors -> lizard

    //paper -> rock
    //paper -> spock

    //rock
    if(_player[0] === "player--rock" && _player[1] === "computer--lizard"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU WIN";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__player__circle").classList.add("win");    
        _score++
    } else if(_player[0] === "player--lizard" && _player[1] === "computer--rock"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU LOSE";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__computer__circle").classList.add("win");    
        if(_score > 0){ 
            _score--
        }
    }
    if(_player[0] === "player--rock" && _player[1] === "computer--scissors"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU WIN";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__player__circle").classList.add("win");    
        _score++
    } else if(_player[0] === "player--scissors" && _player[1] === "computer--rock"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU LOSE";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__computer__circle").classList.add("win");    
        if(_score > 0){ 
            _score--
        }
    }

    //lizard
    if(_player[0] === "player--lizard" && _player[1] === "computer--spock"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU WIN";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__player__circle").classList.add("win");    
        _score++
    } else if(_player[0] === "player--spock" && _player[1] === "computer--lizard"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU LOSE";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__computer__circle").classList.add("win");    
        if(_score > 0){ 
            _score--
        }
    }
    if(_player[0] === "player--lizard" && _player[1] === "computer--paper"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU WIN";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__player__circle").classList.add("win");    
        _score++
    } else if(_player[0] === "player--paper" && _player[1] === "computer--lizard"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU LOSE";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__computer__circle").classList.add("win");    
        if(_score > 0){ 
            _score--
        }
    }
    
    //spock
    if(_player[0] === "player--spock" && _player[1] === "computer--scissors"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU WIN";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__player__circle").classList.add("win");    
        _score++
    } else if(_player[0] === "player--scissors" && _player[1] === "computer--spock"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU LOSE";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__computer__circle").classList.add("win");    
        if(_score > 0){ 
            _score--
        }
    }
    if(_player[0] === "player--spock" && _player[1] === "computer--rock"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU WIN";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__player__circle").classList.add("win");    
        _score++
    } else if(_player[0] === "player--rock" && _player[1] === "computer--spock"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU LOSE";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__computer__circle").classList.add("win");            
        if(_score > 0){ 
            _score--
        }
    }      
    
    //scissors
    if(_player[0] === "player--scissors" && _player[1] === "computer--paper"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU WIN";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__player__circle").classList.add("win");            
        _score++
    } else if(_player[0] === "player--paper" && _player[1] === "computer--scissors"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU LOSE";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__computer__circle").classList.add("win");            
        if(_score > 0){ 
            _score--
        }
    }
    if(_player[0] === "player--scissors" && _player[1] === "computer--lizard"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU WIN";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__player__circle").classList.add("win");           
        _score++
    } else if(_player[0] === "player--lizard" && _player[1] === "computer--scissors"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU LOSE";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__computer__circle").classList.add("win");          
        if(_score > 0){ 
            _score--
        }
    }
    
    //paper
    if(_player[0] === "player--paper" && _player[1] === "computer--rock"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU WIN";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__player__circle").classList.add("win");       
        _score++
    } else if(_player[0] === "player--rock" && _player[1] === "computer--paper"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU LOSE";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__computer__circle").classList.add("win");         
        if(_score > 0){ 
            _score--
        }
    }
    if(_player[0] === "player--paper" && _player[1] === "computer--spock"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU WIN";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__player__circle").classList.add("win");        
        _score++
    } else if(_player[0] === "player--spock" && _player[1] === "computer--paper"){
        document.querySelector(".showdown__result h1").innerHTML = "YOU LOSE";
        document.querySelector(".showdown__result").style.display = "block";
        document.querySelector(".showdown__computer__circle").classList.add("win");        
        if(_score > 0){ 
            _score--
        }
    }

    localStorage.setItem("score", _score);

    let _showResult = anime.timeline({
        easing: 'linear',
        duration: 1000
    })
    _showResult.add({
        targets: '.showdown__result',
        opacity: 1
    }, '3750')
    _showResult.add({
        targets: document.querySelector(".win"),
        begin: function(){
            document.querySelector(".win").classList.add("declared"); 
        }        
    })

    _score = localStorage.getItem("score");

    anime({ 
        targets: document.querySelector("#score"),
        innerHTML: _score,
        easing: 'linear',
        round: 1,
        delay: 3000
    });     
    
}