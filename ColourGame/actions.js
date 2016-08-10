var numSq = 6;
var colours = [];
var pickedColour;

var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var title = document.querySelector("#title");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

init();

function init(){
	
	setUpMode();
	setUpSquares();
	reset();
}

function setUpSquares(){
	for(var i =0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColour = this.style.background;

			if(clickedColour === pickedColour){
				messageDisplay.textContent = "Correct! :)"
				title.style.background = clickedColour;
				changeColours(clickedColour);
				resetButton.textContent = "Play Again?";
			}else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!"
			}
		});
	}
}

function setUpMode(){
	for(var i=0; i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numSq = 3 : numSq = 6;
			reset();
		});
	}
}

function reset(){
	colours = generateRandomColours(numSq);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i =0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colours[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	resetButton.textContent = "New Colours";
	title.style.background = "steelBlue";
	message.textContent = "";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColours(colour){
	for(var i=0; i<squares.length;i++){
		squares[i].style.background = colour;
	}
}

function pickColour(){
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num){
	var arr = []
	for(var i=0; i<num;i++){
		arr.push(randomColour());
	}
	return arr;
}

function randomColour(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}