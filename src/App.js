import React from 'react';
import styled from 'styled-components';

import carbonTexture from './images/texture-carbon.png';

import freshPotatoes from './images/fresh-potatoes.png';
import redApple from './images/red-apple.png';
import eclair from './images/eclair.png';
import cake from './images/cake.png';

var stayFlipped = 800; // 0.8 second

const flipCardUno = () => {
	console.log("first card is clicked");
	
	var cardNumeroUno = document.querySelector('div.numero.uno');
	
	cardNumeroUno.style = `
	transform: rotateY(180deg);
	background-image: url(${freshPotatoes});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	setTimeout(() => {
			cardNumeroUno.style= "transform: rotateY(0deg);";
		}, stayFlipped);
};

const flipCardDue = () => {
	console.log("Second card is clicked");
	
	var cardNumeroDue = document.querySelector('div.numero.due');
	
	cardNumeroDue.style = `
	transform: rotateY(180deg);
	background-image: url(${redApple});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	setTimeout(() => {
			cardNumeroDue.style= "transform: rotateY(0deg);";
		}, stayFlipped);
};

const flipCardTre = () => {
	console.log("third card is clicked");
	
	var cardNumeroTre = document.querySelector('div.numero.tre');
	
	cardNumeroTre.style = `
	transform: rotateY(180deg);
	background-image: url(${eclair});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	setTimeout(() => {
			cardNumeroTre.style= "transform: rotateY(0deg);";
		}, stayFlipped);
};

const flipCardQuatro = () => {
	console.log("fourth card is clicked");
	
	var cardNumeroQuatro = document.querySelector('div.numero.quatro');
	
	cardNumeroQuatro.style = `
	transform: rotateY(180deg);
	background-image: url(${cake});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	setTimeout(() => {
			cardNumeroQuatro.style= "transform: rotateY(0deg);";
		}, stayFlipped);
};

const flipCardCinque = () => {
	console.log("fifth card is clicked");
	
	var cardNumeroCinque = document.querySelector('div.numero.cinque');
	
	cardNumeroCinque.style = `
	transform: rotateY(180deg);
	background-image: url(${cake});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	setTimeout(() => {
			cardNumeroCinque.style= "transform: rotateY(0deg);";
		}, stayFlipped);
};

const flipCardSei = () => {
	console.log("sixth card is clicked");
	
	var cardNumeroSei = document.querySelector('div.numero.sei');
	
	cardNumeroSei.style = `
	transform: rotateY(180deg);
	background-image: url(${eclair});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	setTimeout(() => {
			cardNumeroSei.style= "transform: rotateY(0deg);";
		}, stayFlipped);
};

const flipCardSette = () => {
	console.log("seventh card is clicked");
	
	var cardNumeroSette = document.querySelector('div.numero.sette');
	
	cardNumeroSette.style = `
	transform: rotateY(180deg);
	background-image: url(${redApple});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	setTimeout(() => {
			cardNumeroSette.style= "transform: rotateY(0deg);";
		}, stayFlipped);
};

const flipCardOtto = () => {
	console.log("eighth card is clicked");
	
	var cardNumeroOtto = document.querySelector('div.numero.otto');
	
	cardNumeroOtto.style = `
	transform: rotateY(180deg);
	background-image: url(${freshPotatoes});
	background-repeat: no-repeat;
	background-size: 150px 250px;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	`;
	
	setTimeout(() => {
			cardNumeroOtto.style= "transform: rotateY(0deg);";
		}, stayFlipped);
};

export default function App() {
  return (
    <Container>
		<Cards>
		
			<div className="numero uno" onClick={flipCardUno}></div>
			<div className="numero due" onClick={flipCardDue}></div>
			<div className="numero tre" onClick={flipCardTre}></div>
			<div className="numero quatro" onClick={flipCardQuatro}></div>
			
			<div className="numero cinque" onClick={flipCardCinque}></div>
			<div className="numero sei" onClick={flipCardSei}></div>
			<div className="numero sette" onClick={flipCardSette}></div>
			<div className="numero otto" onClick={flipCardOtto}></div>
			
		</Cards>
    </Container>
  );
}

const Container = styled.div`
	text-align: center;
	margin: 20px 20px;
`

const Cards = styled.div`
	width: 80%;
	
	margin: 10px auto;
	
	display: grid;
	grid-template-columns: auto auto auto auto;
	grid-template-rows: auto auto;
	gap: 40px 40px;
	
	justify-content: center;
	
	.numero {
		width: 150px;
		height: 250px;
		
		border-radius: 10px;
		
		background-image: url(${carbonTexture});
		color: white;
		
		transition: transform 0.6s, background-image 0.6s;
		transform-style: preserve-3d;
	}
	
	.numero:hover {
		cursor: pointer;
	}
`
