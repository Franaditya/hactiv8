function multiDimensi (row,column){
var result = [];
var x = 1;

	for(var i=1; i<=row; i++){
    
	    var arr = [];
	    for(var j=1; j<=column; j++){
	      
	      arr.push(x++);
	  	}
	result.push(arr);
	}
return result;
}



//[1,2,3], [4,5,6]
console.log(multiDimensi(2,3));
//[1,2,3,4], [5,6,7,8], [9,10,11,12]
//console.log(multiDimensi(3,4));
//console.log(multiDimensi(6,2));

