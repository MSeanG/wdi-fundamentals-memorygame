var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
//var cardOne = cards[0];
//var cardTwo = cards[2];
//cardsInPlay.push(cardOne,cardTwo);
//console.log("User Flipped " + cardsInPlay);
var checkForMath = function (){
	if (cardsInPlay.length === 2 && cards[0] === cards[2]) {
		alert("You found a match.")
	} else {
		alert("Sorry, try again.")
	};
};
var flipCard = function (cardId){
	checkForMath();
	console.log("User flipped " + cardsInPlay);
};
cardsInPlay.push(cards[0],cards[2]);
flipCard();