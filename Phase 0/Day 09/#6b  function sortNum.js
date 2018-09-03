var sortNum = x => {
	var arr = [];
	for(var i = 0; i < x; i++){
		arr.push(Math.floor(Math.random ()*100)+1);
	}
	arr.sort((a,b) => a - b);
	return arr;
}
console.log(sortNum(10));