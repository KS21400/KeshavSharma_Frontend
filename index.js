window.onload = () => {
    var xVal = 0;
	var yVal = 0;
	var initialHeight  = 300;
    var cor = document.querySelector('.cor').value;
	var nob = document.querySelector('.nob');
	bounces = 0;

	var updateInterval = 1000;
	var dataLength = 50; // number of dataPoints visible at any point
	const apply = document.querySelector(".form");
	var dps = [];
	var chart = new CanvasJS.Chart("chartContainer", {
		exportEnabled: true,
		title :{
			text: "Ball bounce Path"
		},
		axisX: {
			title: "Time",
			suffix : " s",
			minwidth : 20,
			
	
		},
		axisY: {
			includeZero: false,
			title: "Height",
			suffix : "cm",
			interval: 50
	
		},
		data: [{
			type: "spline",
			markerSize: 0,
			dataPoints: dps 
		}]
	});
	

	
	var updateChart = () => {
	while(initialHeight > 0.1 ){
		
		if (xVal%2 !== 0){
			yVal = 0;
			bounces ++;
		}
		else {
			
			yVal = initialHeight;
			initialHeight = initialHeight*cor*cor;
		}
	
		dps.push({
				x: xVal,
				y: yVal
			});
			xVal++;
			
			
		}
		if (dps.length > dataLength) {
			dps.shift();
		}
		chart.render();
	
	
	}
    apply.addEventListener("submit" , showtest = (e) => {
	cor = document.querySelector('.cor').value;
	updateChart(dataLength); 
	setInterval(function(){ updateChart() }, updateInterval); 
	nob.innerHTML = `No. of Bounces are : ${bounces}`;
    e.preventDefault();
	});

	console.log(dps)
	updateChart(dataLength); 
	setInterval(function(){ updateChart() }, updateInterval);
	nob.innerHTML = `No. of Bounces are : ${bounces}`;


}