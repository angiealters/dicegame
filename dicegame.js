//each player rolls the dice. whoever has a total closest to 40 gets a point. if the total is 40, points double.
//whoever gets to 10 points first wins the game.

//player 1 and 2 rolls dice.
//if player 1 total is closer to 40 than player 2 total, add a point for player 1. if total equals 40, double player 1 total points.
//if player 2 total is closer to 40 than player 1 total, add a point for player 2. if total equals 40, double player 2 total points. 
//if player 1 and player 2 tie, roll again. No points given
//continue to roll dice until player 1 or player 2 reaches a score of 10.
//display the winner

"use strict";

	
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
function decideWinner(){
	var player = playerRoll();
	var computer = computerRoll();
	do{
		if (player === 40){
			console.log(computer);
			return alert ("Your score is 40, your points double!");
		}else if (computer === 40){
			console.log(player);
			return alert ("Computer score is 40, computer's points double");
		}else if ((40-player || player-40) < (40-computer || computer-40)){
			console.log(computer);
			return alert ("Your score is " + player + ". Computer score is " + computer + ". You win this round!");
		}else if ((40-player || player-40) > (40-computer || computer-40)){
			console.log(player);
			return alert ("Your score is " + player + ". Computer score is " + computer + ". Computer wins this round.");
		}
	}
	while (player !== computer);
		console.log(player, computer);
		return alert ("Score is tied. Roll again.");
}	
function keepPoints(){
	var playerScore = 0;
	var computerScore = 0;
	var player = playerRoll();
	var computer = computerRoll();
	if (player === 40){
		playerScore = playerScore * 2;
	}else if (computer === 40){
		computerScore = computerScore * 2;
	}else if ((40-player || player-40) < (40-computer || computer-40)){
		playerScore = playerScore + 1;
	}else if ((40-player || player-40) > (40-computer || computer-40)){
		computerScore = computerScore + 1;
	}	
}

function startGame(){
	alert("Welcome! Each player rolls a 4, 6, 8, 10, 12, and 20 sided die. Whoever has a total closer to 40 gets a point. If it's a tie, no points are given. If the total is equal to 40, your total points double! Get to 10 points first to win the game. Good luck!");
	var points = keepPoints();
	var winner = decideWinner();
	for (points=0, points<=10, points++){
		return winner;
	} 
	}

console.log(startGame());