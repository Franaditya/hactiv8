function popStr (a){
	if(typeof a[a.length-1] === 'string'){
	a.pop();
	}
	return a;

}
console.log(popStr([1,2,3,'halo']));