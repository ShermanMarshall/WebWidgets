define(function(require) {
	
	var variable = 'string';

	for (let i = 0; i < 10; i++) {
		console.log(i);
	}

/*
	let x = 5;

	//let has precedence: will not permit the initialization
	for (var x = 0; x < 10; x++) {
		console.log(x);
	}

	//default function parameters
	function test(value = 42) {
		console.log(value);
	}
	
	//spread operator
	more compact way to apply params to functions
	can also be used to combine arrays

	function spreadOp(one, two, ...set) {
		console.log(`${one} ${two}`);
		console.log(set);
	}

	Object.assign({}, {'a': 'a', 'b': 'b'});
*/

	const car = {
		wheels: 4,
		make: 'toyota'
	};
	let {one, two, undef} = car;
	console.log(`${one} ${two} ${undef}`);
	
	
});
