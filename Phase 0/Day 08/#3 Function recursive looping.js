function looping (a,b){
	if (a === b ){
		return ;
	}
	console.log (a);
	looping (a+1 , b);
}

looping (1 , 55);

