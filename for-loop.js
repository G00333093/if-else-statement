var scores = [24, 32, 17]; 		 //array for score
var arrayLength = scores.length; //item in array
var roundNumber =0;				//Current round
var msg = '';					//message

//loop through the items in the array
for (var i = 0; i < arrayLength; i++) {
	
	//Arrays are zero based ( so 0 is round 1)
	//add 1 to the current round
	roundNumber = (i + 1);
	
	//write the current round t0 message
	msg += 'Round' + roundNumber + ': ';
	
	//get the score from the scores array
	msg += scores[i] + '<br />' ;
}

document.getElementById('answer').innerHTML = msg;
