window.setInterval(Update, 500);

var x=0;
var y=1;

function Update () {
	x++
	if (x>5) {
		x=1;	
		y++;
		
		if (y>5) {
			y=1;
			ClearGrid();
		}
	}
document.getElementById("grid-" + y + "-" + x).style.backgroundColor = "red";
}


function ClearGrid () {
	for (var x = 1; x <= 5; x++) {
		for (var y = 1; y <= 5; y++) {
			document.getElementById("grid-" + x + "-" +
								   y).style.backgroundColor = "white";
		}
	}
	
}

