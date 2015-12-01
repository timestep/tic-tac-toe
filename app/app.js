(function () {

	var grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

	window.grid = grid;

	for (var i = 0; i < grid.length; i++) {
		createBreak();
		for (var j = 0; j < grid[i].length; j++) {
			createButton(i, j);
		}
	}

	function createButton(i, j) {
		var btn = document.createElement('BUTTON');
		btn.innerText = '-';
		btn.coordinates = {
			i: i,
			j: j
		};
		document.body.appendChild(btn);
		btn.onclick = function () {
			btn.innerText = 'X';
			updateGridCoordinate(btn.coordinates);
			checkWin();
		};
	}

	function updateGridCoordinate(coordinates) {
		grid[coordinates.i][coordinates.j] = 1;
	}

	function checkWin(){

	}

	function createBreak() {
		var br = document.createElement('BR');
		document.body.appendChild(br);
	}



})();
