var color=generateRandomColor(6);
var pickedColor=pickColor();
var rgbDisplay=document.querySelector("#rgbdisplay");
rgbDisplay.textContent=pickedColor;
var square=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
/*var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");*/
var modeBtn=document.querySelectorAll(".mode");

for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor= color[i];
	square[i].addEventListener("click",function(){
		/*message.style.color="black";*/
		var selected=this.style.backgroundColor;
		if(selected===pickedColor){
			changeColor(selected);
			message.textContent="Correct!!!"
			message.style.color="darkgreen"
			h1.style.backgroundColor=selected;
			resetButton.textContent="Play Again?";			
		}else{
			this.style.backgroundColor="#232323"
			message.textContent="Try Again"
			message.style.color="red"
		}
	})
}

for(i=0;i<modeBtn.length;i++){
	modeBtn[i].addEventListener("click",function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			color=generateRandomColor(3);
		}else{
			color=generateRandomColor(6);
		}
		reset();
	})
}

function reset(){
	color=generateRandomColor(color.length)
	pickedColor=pickColor();
		rgbDisplay.textContent=pickedColor;
		for(var i=0;i<square.length;i++){
			if(color[i]){
				square[i].style.display= "block";
				square[i].style.backgroundColor= color[i];
			} 	else{
					square[i].style.display= "none";
				}
		}
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New game";
	message.textContent="";
}


/*easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	 color=generateRandomColor(3);
	 pickedColor=pickColor();
	 rgbDisplay.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		if(color[i]){
		square[i].style.backgroundColor= color[i];
		} else{
		square[i].style.display= "none";
		}
	 
	}
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New game";
	message.textContent="";
})

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	 color=generateRandomColor(6);
	 pickedColor=pickColor();
	 rgbDisplay.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor= color[i];
		square[i].style.display= "block";
	 
	}
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New game";
	message.textContent="";
})*/

resetButton.addEventListener("click",function(){
	reset();
/*	color=generateRandomColor(color.length)
	pickedColor=pickColor()
	rgbDisplay.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
	 square[i].style.backgroundColor= color[i];
		}
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New game";
	message.textContent="";
	if(color.length===3){
		easyBtn.classList.add("selected");
	}else{
		hardBtn.classList.add("selected");
	}
	*/
});



function changeColor(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor= color;
	}
}


function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g +", " + b +")"
}

function generateRandomColor(num){
	var arr=[]
	for(i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}


function pickColor(){
	var random=Math.floor((Math.random()*color.length));
	return color[random];
}


