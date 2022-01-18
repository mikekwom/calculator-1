const readline = require('readline');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});



reader.question("What would you like to calculate?", function (input) {
	tokens = input.split(' ');

	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	let answer;

	if (mathSymbol === "+") {
		answer = num1 + num2
		console.log(`${num1} ${mathSymbol} ${num2} = ${answer}`)
	} else if (mathSymbol === "-") {
		answer = num1 - num2
		console.log(`${num1} ${mathSymbol} ${num2} = ${answer}`)
	} else if (mathSymbol === "*") {
		answer = num1 * num2
		console.log(`${num1} ${mathSymbol} ${num2} = ${answer}`)
	} else if (mathSymbol === "/") {
		answer = num1 / num2
		console.log(`${num1} ${mathSymbol} ${num2} = ${answer}`)
	} else if (mathSymbol === "^") {
		answer = Math.sqrt(num1)
		console.log(`The square root of ${num1} is ${answer}`)
	} else {
		console.log(`Unexpected math symbol ${mathSymbol}`)

	}

	// console.log("mathSymbol", mathSymbol)
	// console.log("num1", num1)
	// console.log("num2", num2)

	// This line closes the connection to the command line interface.
	reader.close()

});