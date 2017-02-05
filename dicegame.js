"use strict";

var playerScore = 1;
var computerScore = 1;
function startGame(){
	alert("Welcome! Each player rolls a 4, 6, 8, 10, 12, and 20 sided die. Whoever has a total closer to 40 gets a point. If it's a tie, or totals are equidistant from 40, no points are given. If the total is equal to 40, your total points double! Get to 10 points first to win the game. Good luck!");	
}
function rollDie(numberOfSides){
	return Math.floor((Math.random()*numberOfSides)+1);
}
function playerRoll(){
	var die1 = rollDie(4);
	var die2 = rollDie(6);
	var die3 = rollDie(8);
	var die4 = rollDie(10);
	var die5 = rollDie(12);
	var die6 = rollDie(20);
	return die1+die2+die3+die4+die5+die6;
}
function computerRoll(){
	var die1 = rollDie(4);
	var die2 = rollDie(6);
	var die3 = rollDie(8);
	var die4 = rollDie(10);
	var die5 = rollDie(12);
	var die6 = rollDie(20);
	return die1+die2+die3+die4+die5+die6;
}
function playRound(){
	var player = playerRoll();
	var computer = computerRoll();
	return player, computer;
}

function decideWinner(roundWinner){
		var player = playerRoll();
		var computer = computerRoll();
			if (player === computer){
				return alert ("Total is tied. Please roll again.");
			}else if ((40-player || player-40) === (40-computer || computer-40)){
				return alert ("Totals are equidistant from 40. Please roll again.");
			}else if (player === 40){
				playerScore == playerScore * 2;
				alert ("Your total is " + player + ", your points double! Your score is "+ playerScore);
				return playerScore++;
			}else if (computer === 40){
				computerScore == computerScore * 2;
				alert ("Computer total is " + computer + ", computer's points double. Computer's score is " + computerScore);
				return computerScore++;
			}else if ((40-player || player-40) < (40-computer || computer-40)){
				playerScore == playerScore + 1;
				alert ("Your total is " + player + ". You win this round! Your score is " + playerScore);
				return playerScore++;
			}else if ((40-player || player-40) > (40-computer || computer-40)){
				computerScore == computerScore + 1;
				alert ("Computer total is " + computer + ". Computer wins this round. Computer score is " + computerScore);
				return computerScore++;
			}
}
function playGame(){
	var start = startGame();
	while (playerScore<11 || computerScore<11){
		var round = playRound();
		decideWinner(playRound);	
	}
}

console.log(playGame());