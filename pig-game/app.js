/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, previousDice, diceDOM, winningScore;
diceDOM = [document.querySelector('.dice-0'), document.querySelector('.dice-1')];

init();
hideButtons();

scoreActiveDOM = document.getElementById('score-' + activePlayer);

document.querySelector('.btn-roll').addEventListener('click', function () {
    // previousDice = dice;
    generateDice();
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
});

function generateDice() {
    showDice();
    for (let i = 0; i < diceDOM.length; i++) {

        var dice = Math.floor(Math.random() * 6) + 1;
        diceDOM[i].src = 'dice-' + dice + '.png';
        roundScore += dice;
        if (dice === 1/* || dice === previousDice*/) {
            changeActivePlayer();
        }
    }

}

document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    document.querySelector('#current-' + activePlayer).textContent = 0;

    if (scores[activePlayer] >= winningScore) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER';
        hideDice();
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        hideButtons();
        document.getElementById('winning-score').value = null;
        document.getElementById('winning-score').style.display = 'block';
        return;
    }
    changeActivePlayer();
});

document.querySelector('.btn-new').addEventListener('click', startNewGame);

function startNewGame() {
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    init();

    if (winningScore <= 0) {
        window.alert('Winning score should be more than 0!');
        return;
    }
    document.getElementById('winning-score').style.display = 'none';
    showButtons();
}

function init() {
    hideButtons();
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    winningScore = document.getElementById('winning-score').value;
    hideDice();
}

function changeActivePlayer() {
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    roundScore = 0;
    activePlayer = activePlayer === 1 ? 0 : 1;
    hideDice();
}

function hideDice() {
    for (let i = 0; i < diceDOM.length; i++) {
        diceDOM[i].style.display = 'none';
    }
}

function showDice() {
    for (let i = 0; i < diceDOM.length; i++) {
        diceDOM[i].style.display = 'block';
    }
}

function hideButtons() {
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';
}

function showButtons() {
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
}










