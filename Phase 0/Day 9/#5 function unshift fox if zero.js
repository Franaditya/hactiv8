function unshiftStr (a){
	if(a[0] === 0){
	a.unshift('Fox');
	}
	return a;

}
console.log(unshiftStr([0,1,2,3]));