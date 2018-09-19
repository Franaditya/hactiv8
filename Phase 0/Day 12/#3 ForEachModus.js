let modus = 0;   //indeks array
let terbanyak = [];

function cariModus(arr) {
	arr.sort(function(a, b) { return a > b });
	//console.log(arr);
	arr.forEach((item, index) => {
		if(arr[index] == arr[index + 1]){
			terbanyak.push(item);
			//console.log(terbanyak);
			modus = index;
			//console.log(modus)
		}
	});
	if (arr[0] == undefined){
		return arr;
	}else{
		return arr[modus-1]; 
	}

}
console.log(cariModus([ ])); 
console.log(cariModus([2,2,2,5])); //2
console.log(cariModus([10,2,7,5,2,5,5,5])); //5 
console.log(cariModus([ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ])); //1
console.log(cariModus([10,10,3,5,2,10,2,12,12])); //10