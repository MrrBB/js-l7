let clock = document.getElementById('clock');
	
	function timerClock(){
		let time = new Date(),
			hours = time.getHours(),
			minutes = time.getMinutes(),
			seconds = time.getSeconds();
	
		if(hours < 10){
			hours = '0' + hours;
		}
		if(minutes < 10){
			minutes = '0' + minutes;
		}
		if(seconds < 10){
			seconds = '0' + seconds;
		}


		let timer = hours + ":" + minutes + ':' + seconds;	

			clock.textContent = timer;


	}
	timerClock()

	setInterval(timerClock, 1000);