
	// Exercice 16 :
	// You know the infamous song “99 Bottle of Beer?”

	let bottles = +prompt("Enter a number of bottles of beer");
	let take_down=1;
	while (bottles > 1) {
		console.log(bottles + " bottles of beer on the wall\n" + bottles + " bottles of beer\n" + "Take " + take_down + " down, pass them around\n");	
		bottles -= take_down;
		take_down++;	
	}

	if(bottles<take_down){
		console.log("End");
	}
	if(bottles===1){
		console.log(bottles + " bottle of beer on the wall\n");
	}
