import React from 'react';
import { Link } from 'react-router-dom';

import './css/main.css';

import freshPotatoes from './images/fresh-potatoes.png';
import redApple from './images/red-apple.png';
import eclair from './images/eclair.png';
import cake from './images/cake.png';
import tryAgain from './images/tryAgain.webp';

let isFlipped = [ false, false, false, false, false, false, false, false ];
let cards = [];

let flippedCardsCounter = 0;
let allFlippedCounter = 0;
let pairs = [];

//list of matching cards 5-4, 2-7, 1-8, 3-6



function cardMatching(number){
	pairs.push(number);
	
	if(pairs.length === 2){
		//Make other cards not clickable during the pairs flip
		var classCards = document.querySelector('div.cards');
		classCards.style = 'pointer-events: none'; // disable clicking on the other cards until 1.5 seconds
		
		console.log("Show pairs: " + pairs[0] + " " + pairs[1]);
				
		//To do Flip back the pairs and check for matching
		if((pairs[0] === 2 && pairs[1] === 7) || (pairs[0] === 7 && pairs[1] === 2)) {
			console.log("Match found! 2 - 7 apples");
			
			classCards.style = 'pointer-events: auto';
			pairs = [];
		} else if((pairs[0] === 3 && pairs[1] === 6) || (pairs[0] === 6 && pairs[1] === 3)) {
			console.log("Match found! 3 - 6 eclairs");
			
			classCards.style = 'pointer-events: auto';
			pairs = [];
		} else if((pairs[0] === 5 && pairs[1] === 4) || (pairs[0] === 4 && pairs[1] === 5)) {
			console.log("Match found! 5 - 4 cakes");
			
			classCards.style = 'pointer-events: auto';
			pairs = [];
		} else if((pairs[0] === 1 && pairs[1] === 8) || (pairs[0] === 8 && pairs[1] === 1)) {
			console.log("Match found! 3 - 6 potatoes");
			
			classCards.style = 'pointer-events: auto';
			pairs = [];
		} else {
			setTimeout(() => {
				cards[pairs[0] - 1].style = 'transform: rotateY(0deg);';
				cards[pairs[1] - 1].style = 'transform: rotateY(0deg);';
				
				isFlipped[pairs[0] - 1] = false;
				isFlipped[pairs[1] - 1] = false;
				
				pairs = []; // Nullify the pairs
				classCards.style = 'pointer-events: auto'; //enable clicking again on the cards
			}, 1500);
		}
		
		for(var f of isFlipped){
			if(f) {
				allFlippedCounter++;
			} else {
				allFlippedCounter = 0;
				break;
			}
			if (allFlippedCounter === 8) {
				console.log("All cards are flipped - Congratulations! You won!");
				
				var cardElements = document.querySelector('div.cards');
				cardElements.innerHTML = "";
				
				var winnerElement = document.querySelector('div.winner');
				winnerElement.innerHTML = `
				<h1>All cards are flipped - Congratulations! You Won! </h1>
				<a href="." style="margin: 10px; border: 0px;">
				<img src=${tryAgain} alt="try again" width="480" height="271" /></a>`;
			}
		}
		
		flippedCardsCounter = 0; // Start counter from zero again
		
	}
}

const flipCardUno = () => {
	console.log("first card is clicked");
	
	cards[0] = document.querySelector('div.numero.uno');
	
	cards[0].style = `
	transform: rotateY(180deg);
	background-image: url(${freshPotatoes});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	if(!isFlipped[0]){
		isFlipped[0] = true;
		
		++flippedCardsCounter;
		cardMatching(1);
	}
}

const flipCardDue = () => {
	console.log("Second card is clicked");
	
	cards[1] = document.querySelector('div.numero.due');
	
	cards[1].style = `
	transform: rotateY(180deg);
	background-image: url(${redApple});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	if(!isFlipped[1]){
		isFlipped[1] = true;
		
		++flippedCardsCounter;
		cardMatching(2);
	}
};

const flipCardTre = () => {
	console.log("third card is clicked");
	
	cards[2] = document.querySelector('div.numero.tre');
	
	cards[2].style = `
	transform: rotateY(180deg);
	background-image: url(${eclair});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	if(!isFlipped[2]){
		isFlipped[2] = true;
		
		++flippedCardsCounter;
		cardMatching(3);
	}
};

const flipCardQuatro = () => {
	console.log("fourth card is clicked");
	
	cards[3] = document.querySelector('div.numero.quatro');
	
	cards[3].style = `
	transform: rotateY(180deg);
	background-image: url(${cake});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	if(!isFlipped[3]){
		isFlipped[3] = true;
		
		++flippedCardsCounter;
		cardMatching(4);
	}
};

const flipCardCinque = () => {
	console.log("fifth card is clicked");
	
	cards[4] = document.querySelector('div.numero.cinque');
	
	cards[4].style = `
	transform: rotateY(180deg);
	background-image: url(${cake});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	if(!isFlipped[4]){
		isFlipped[4] = true;
		
		++flippedCardsCounter;
		cardMatching(5);
	}
};

const flipCardSei = () => {
	console.log("sixth card is clicked");
	
	cards[5] = document.querySelector('div.numero.sei');
	
	cards[5].style = `
	transform: rotateY(180deg);
	background-image: url(${eclair});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	if(!isFlipped[5]){
		isFlipped[5] = true;
		
		++flippedCardsCounter;
		cardMatching(6);
	}
};

const flipCardSette = () => {
	console.log("seventh card is clicked");
	
	cards[6] = document.querySelector('div.numero.sette');
	
	cards[6].style = `
	transform: rotateY(180deg);
	background-image: url(${redApple});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	if(!isFlipped[6]){
		isFlipped[6] = true;
		
		++flippedCardsCounter;
		cardMatching(7);
	}
};

const flipCardOtto = () => {
	console.log("eighth card is clicked");
	
	cards[7] = document.querySelector('div.numero.otto');
	
	cards[7].style = `
	transform: rotateY(180deg);
	background-image: url(${freshPotatoes});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	if(!isFlipped[7]){
		isFlipped[7] = true;
		
		++flippedCardsCounter;
		console.log(flippedCardsCounter);
		cardMatching(8);
	}
};

export default function FlipFlop() {
  return (
	<>
	<div id="back"><Link to="/">Back</Link></div>
    <div className="container">
		<div className="cards">
		
			<div className="numero uno" onClick={flipCardUno}></div>
			<div className="numero due" onClick={flipCardDue}></div>
			<div className="numero tre" onClick={flipCardTre}></div>
			<div className="numero quatro" onClick={flipCardQuatro}></div>
			
			<div className="numero cinque" onClick={flipCardCinque}></div>
			<div className="numero sei" onClick={flipCardSei}></div>
			<div className="numero sette" onClick={flipCardSette}></div>
			<div className="numero otto" onClick={flipCardOtto}></div>
			
		</div>
		<div className="winner"></div>
    </div>
    </>
  );
}
