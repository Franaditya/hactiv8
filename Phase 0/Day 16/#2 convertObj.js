function convert (arr) {
var hasil =[];
for (var i = 0; i < arr.length; i++) {
    var objPerson = {};
    var j = 0 , k = j + 1, l= k + 1, m = l+1;
    objPerson.ID = arr[i][j];
    objPerson.firstName = arr[i][k];
    objPerson.lastName =  arr[i][l];
    objPerson.email = arr[i][m];
    j++; 
    hasil.push(objPerson);
  }

return hasil;

}



// TEST CASES
console.log(convert([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
  { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/

console.log(convert([]));
// []
