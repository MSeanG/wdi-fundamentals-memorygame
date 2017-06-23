/* unit 7 */
/*
console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
*/


/* unit 8 */
/*
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match.")
	} else {
		alert("Sorry, try again.")
	}
};
*/


/* unit 9 */
/*
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMath = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match.")
		} else {
			alert("Sorry, try again.")
		}
	};
};

var flipCard = function () {
	checkForMath();
	console.log("User flipped " + cardsInPlay[0]);
	console.log("User flipped " + cardsInPlay[1]);
};

cardsInPlay.push(cards[0],cards[2]);
flipCard();
*/


/* unit 10 */
/*
var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'image/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'image/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'image/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'image/king-of-diamonds.png'
	}
];
var cardsInPlay = [];

var checkForMath = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match.")
		} else {
			alert("Sorry, try again.")
		}
	};
};

var flipCard = function () {
	checkForMath();
	console.log("User flipped " + cards[0].rank);
	console.log(cards[0].suit);
	console.log(cards[0].cardImage);
	console.log("User flipped " + cards[2].rank);
	console.log(cards[2].suit);
	console.log(cards[2].cardImage);
};

cardsInPlay.push(cards[0],cards[2]);
flipCard();
*/



/* unit 11 */
var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'image/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'image/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'image/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'image/king-of-diamonds.png'
	}
];
var cardsInPlay = [];

var checkForMath = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match.")
		} else {
			alert("Sorry, try again.")
		}
	};
};

var flipCard = function () {
	checkForMath();
	console.log("User flipped " + cards[0].rank);
	console.log(cards[0].suit);
	console.log(cards[0].cardImage);
	console.log("User flipped " + cards[2].rank);
	console.log(cards[2].suit);
	console.log(cards[2].cardImage);
};

cardsInPlay.push(cards[0],cards[2]);
flipCard();