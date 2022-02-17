console.log('I am from the core.js file!');

// Assigning values
const name = 'erik';

// Value type
// string: 'hello'
// number: 678
// boolean: true or false
// array: ['thing1', 67, true, red, green]
// function: {}

const num1 = 4;
const num2 = 8;

const sum = num1 + num2;

console.log(sum);

//Function

const f1 = 10;
const f2 = 7;

// created function
function multiply(param1, param2) {
	const product = param1 * param2;
	return product;
}

// calls the function
console.log(multiply(f1, f2));

// conditionals: if, if/else, ternaries, switch
const number = 3333;

function numberSize(n) {
	if (n < 5) {
		// if true, run this code:
		console.log('Less than 5');
	} else if (n >= 5 && n < 10) {
		console.log(' Between 5 and 9');
	} else {
		console.log('10 or greater!');
	}
}

numberSize(number);

// operators

const firstName = 'kaden';
const lastName = 'Blahhhhh';

function nameCheck(firstName, lastName) {
	if (firstName === 'kaden' || (firstName === 'erik' && lastName === 'o')) {
		console.log('awesome name!');
	}
}

nameCheck(firstName, lastName);

// ternarie
const darkMode = true;

// if (darkMode) {
// 	alert('Dark Mode ON!');
// } else {
// 	alert(' Dark Mode OFF.');
// }

function checkTheme(darkMode) {
	const themeMessage = darkMode
		? alert('Dark Mode ON!')
		: alert('Dark Mode OFF.');
	return themeMessage;
}

checkTheme(darkMode);

// switch statement
const color = 'green';

switch (color) {
	case 'blue':
		console.log('Blue!');
		break;
	case 'yellow':
		console.log('Yellow!');
		break;
	case 'green':
		console.log('Green!');
		break;
	default:
		console.log('Run this code if all else fails!');
}
