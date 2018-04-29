/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('#score-' + activePlayer).textContent = 0;

document.querySelector('.btn-roll').addEventListener('click',function(){	
	var dice = Math.floor(Math.random() * 6) + 1;
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = "block";
	diceDom.src = 'dice-'+dice+'.png';
	if(dice !== 1){
		roundScore += dice;
		console.log('test');
	}
	else {
		alert('Switching to the other player because the dice rolled 1');
		switchActivePlayer();
	}	
	document.querySelector('#current-'+ activePlayer).textContent = roundScore;
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	scores[activePlayer] += roundScore;
	document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
	roundScore = 0;
	document.querySelector('#current-'+ activePlayer).textContent = roundScore;
	checkWinner();
	switchActivePlayer();
	alert('switching to another player because current player clicked on hold');
});

document.querySelector('.btn-new').addEventListener('click',function(){
	document.querySelector('.dice').style.display = "none";
	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
});

function checkWinner(){
	if(scores[0] >= 100){
		alert('player1 wins the game');
		document.querySelector('.dice').style.display = "none";
	} 
	else if(scores[1] >= 100){
		alert('player2 wins');
		document.querySelector('.dice').style.display = "none";
	}
}

function switchActivePlayer(){
	if(activePlayer == 0){
			roundScore = 0;
			document.getElementById('current-0').textContent = 0;
			activePlayer = 1;
			document.querySelector('.player-0-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.add('active');
		}
		else if(activePlayer == 1){
			roundScore = 0;
			document.getElementById('current-1').textContent = 0;
			activePlayer = 0;
			document.querySelector('.player-1-panel').classList.remove('active');
			document.querySelector('.player-0-panel').classList.add('active');

		}
}







