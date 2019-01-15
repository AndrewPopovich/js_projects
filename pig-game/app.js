/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, currentActiveDOM, diceDOM;
diceDOM = document.querySelector('.dice');

init();

scoreActiveDOM = document.getElementById('score-' + activePlayer);

document.querySelector('.btn-roll').addEventListener('click', function () {
    var dice = Math.floor(Math.random() * 6) + 1;

    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM.style.display = 'block';
    roundScore += dice;
    
    if (dice === 1) {
        changeActivePlayer();
    }
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    document.querySelector('#current-' + activePlayer).textContent = 0;

    if (scores[activePlayer] >= 10) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER';
        diceDOM.style.display= 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        return;
    }
    changeActivePlayer();
});

document.querySelector('.btn-new').addEventListener('click', startNewGame);

function startNewGame() {
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    init();
}
function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    diceDOM.style.display = 'none';
}

function changeActivePlayer() {
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    roundScore = 0;
    activePlayer = activePlayer === 1 ? 0 : 1;
    diceDOM.style.display = 'none';
}










