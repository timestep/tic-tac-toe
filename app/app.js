(function () {

	for (var i = 1; i < 10; i++) {
		thatCreatesButtonWithADashInIt();
		if(i%3 === 0) {
			var br = document.createElement("br");
			document.body.appendChild(br);
		}
	}

	function thatCreatesButtonWithADashInIt(){
		var btn = document.createElement("BUTTON");
		var t = document.createTextNode("-");
		btn.appendChild(t);
		document.body.appendChild(btn);
		btn.onclick = function(){
			btn.innerHTML = 'X';
		};
	}

})();
