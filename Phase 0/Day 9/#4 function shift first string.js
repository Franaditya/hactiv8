function shiftStr (a){
	if(typeof a[0] === 'string'){
	a.shift();
	}
	return a;

}
console.log(shiftStr(['fox',1,2,3]));