function deleteUndefinedKeys (object) {

	Object.keys(object).forEach(key => {
		if (object[key] === undefined) {
			delete object[key];
		}
		//console.log(object[key]);
	});
	return object;
}

console.log(deleteUndefinedKeys({
	name: 'Dimitri',
	age: undefined,
	email: 'dimitri@mail.com'
}));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(deleteUndefinedKeys({
	name: undefined,
	age: undefined,
	email: undefined
}));
// {}


