(function () {

	var grid;

	window.grid = grid;

	function init() {
		document.body.innerHTML = '';
		grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
		for (var i = 0; i < grid.length; i++) {
			createBreak();
			for (var j = 0; j < grid[i].length; j++) {
				createButton(i, j);
			}
		}
	}

	init();

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
		var hasHorizontalWin = horizonalWin();
		var hasVerticalWin = verticalWin();
		var hasDiagonalWin = diagonalWin();
		if (hasDiagonalWin === true || hasVerticalWin === true || hasHorizontalWin === true){
			init();
		}
	}

	function horizonalWin() {
		for (var i = 0; i < grid.length; i++) {
			var check;
			for (var j = 0; j < grid[i].length; j++) {
				if (grid[i][j] === 1){
					check = true;
				} else {
					check = false;
					break;
				}
			}
			if (grid[i].length === j && check === true){
				check = false;
				alert('you win!1=!!');
				return true;
			}
		}

	}

	function verticalWin() {
		if (grid[0][0] === 1 && grid[1][0] === 1 && grid[2][0] === 1){
			alert('you win!1=!!');
			return true;
		} else if (grid[0][1] === 1 && grid[1][1] === 1 && grid[2][1] === 1){
			alert('you win!1=!!');
			return true;
		} else if (grid[0][2] === 1 && grid[1][2] === 1 && grid[2][2] === 1){
			alert('you win!1=!!');
			return true;
		}
	}

	function diagonalWin() {
		if (grid[0][0] === 1 && grid[1][1] === 1 && grid[2][2] === 1){
			alert('you win!1=!!');
			return true;
		} else if (grid[0][2] === 1 && grid[1][1] === 1 && grid[2][0] === 1){
			alert('you win!1=!!');
			return true;
		}
	}

	function createBreak() {
		var br = document.createElement('BR');
		document.body.appendChild(br);
	}



})();
