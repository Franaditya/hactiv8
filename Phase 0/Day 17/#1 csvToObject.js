function csvToObject (text) {
let arr = text.split(',');
var obj = {};
var key = ['name', 'email', 'gender'];
for(var i=0; i < arr.length; i++){
	obj[key[i]] = arr[i];
}
return obj ;
}

// TEST CASES
console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
// { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }

console.log(csvToObject('Icha,icha@mail.com,female'));
// { name: 'Icha', email: 'icha@mail.com', gender: 'female' }

console.log(csvToObject('Dhani,dhani@mail.com,male'));
// { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }