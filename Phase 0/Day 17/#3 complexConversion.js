function complexConversion (text) {
var arr = text.split(':').join(',').split(',');
var obj = {};
 	arr.forEach((item , index) => {
 		if (item == 'name') obj['name'] = arr[index +1];
 		if (item == 'email') obj['email'] = arr[index +1];
 		if (item == 'gender') obj['gender'] = arr[index +1];
 		if (item == 'age') obj['age'] = arr[index +1];
 		if (item == 'city') obj['city'] = arr[index +1];
 		if (item == 'province') obj['province'] = arr[index +1];
 	});
  
  return obj;
}

// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }

console.log(complexConversion(''));
//{}
