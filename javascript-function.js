function myCalc(param) {
//read in two values from input boxes
console.log(param);
var num1 = parseInt(document.getElementById("number1").value);
var num2 = parseInt(document.getElementById("number2").value);
var result;

if (param =='add') {
	//add them together
	result = num1 + num2;
}

	else if (param =='multiply') {
	//add them together
	result = num1 * num2;
	}
	else if (param == 'subtract') {
	//add them together
	result = num1 - num2;
	}
	else if (param == 'divide') {
	//add them together
	result = num1 / num2;
	}
	// display on page
	document.getElementById("demo").innerHTML = 'answer: '+ result;
}