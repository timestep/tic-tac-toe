(function () {

	var btn1Clicked = 0;

	var grid = [[0,0,0], [0,0,0] , [0,0,0]];

	for (var i = 0; i < grid.length; i++) {
		createBreak(i);
		for (var j = 0; j < grid[i].length; j++) {
			createButton(i,j);
		}
	}

	function createButton(i,j) {
		var btn = document.createElement("BUTTON");
		btn.innerText = '-';
		document.body.appendChild(btn);
	}

	function createBreak(i) {
		var br = document.createElement("BR");
		document.body.appendChild(br);
	}

	btn.onclick = function (event) {
		if(btn1Clicked > 0){
			return;
		}
		btn1Clicked = btn1Clicked + 1;
		btn.innerText = "X";
		console.log(btn1Clicked);
	}

})()
