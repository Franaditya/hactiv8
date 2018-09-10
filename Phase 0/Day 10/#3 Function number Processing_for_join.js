var ganjil = [] ;
var genap  = [] ;
function numberProcessing(numberArr) {
	var total = 0;
	for(var index = 0; index < numberArr.length; index++) {
		total += numberArr[index];

		if(numberArr[index] % 2 == 0) {
			genap.push(numberArr[index]);
			var odds = genap.join('-');
		}else{
			ganjil.push(numberArr[index]);
			var evens = ganjil.join('-');
		}
	}

	var arr = numberArr;
	arr.sort((a,b) => a - b);
	//console.log(arr);

	return 'Min : '+ arr[0] + ', Max : '+ arr[arr.length-1] + ', Mean : ' 
			+ Math.round(total/numberArr.length) + ', Odds : ' 
			+  odds + ', Evens : '+ evens;

}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));