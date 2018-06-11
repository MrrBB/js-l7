let coffee = document.getElementById('cup'),
	btn=document.getElementById('btn'),
	mord = document.getElementById('mordecai');
function f1(){
	let stepLeft = 0;
	function move() {
		stepLeft +=5;
		coffee.style.left = stepLeft + "px";
		requestAnimationFrame(move);
	}

	requestAnimationFrame(move);
}
