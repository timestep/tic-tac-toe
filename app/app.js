var grid = [5,5,5,5,5,5,5,5]

var init = function(){
	for (var index = 0; index < grid.length; index++) {
		generateButton(index);		
	}
}

function generateButton(gridIndex){
	var btn = document.createElement("BUTTON");        // Create a <button> element
	btn.setAttribute("id", "button");
	btn.gridIndex = {
		indexValue: gridIndex,
		value: 1
	};
	btn.onclick = onClickOfButton;
	var t = document.createTextNode("CLICK ME");       // Create a text node
	btn.appendChild(t);                                // Append the text to <button>
	document.body.appendChild(btn);
}

function setBoardState(gridPosition){
	if(!grid[gridPosition.indexValue]){
		grid[gridPosition.indexValue] = 1;
	} else {
		grid[gridPosition.indexValue] = 0;
	}
}

function checkBoardState(){
	if(grid[0] === 0 && grid[1] === 0 && grid[2] === 0){
		alert('You win')
	}
}

function onClickOfButton(event){
	event.srcElement.innerHTML = 'Hoopla'
	setBoardState(event.srcElement.gridIndex);
	checkBoardState();
}

document.addEventListener("DOMContentLoaded", function(event) { 	
	console.log("DOM fully loaded and parsed");
	init();
});
