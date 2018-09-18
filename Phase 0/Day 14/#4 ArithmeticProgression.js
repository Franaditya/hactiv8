function isArithmeticProgression(arr){
 var math;
	var number = [ (arr[1] - arr[0]), (arr[1] / arr[0]) ];
	for ( var i = 0; i < arr.length-2; i++ ) {
		math = false;
		if ( (number[0] + arr[i+1]) == arr[i+2] )
			math = true;
	}
	return math;
}

// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
console.log(isArithmeticProgression([-5, -3, -1, 1, 3, 5])); // true
console.log(isArithmeticProgression([-12, -7, -2, 3, 8, 13])); // true


