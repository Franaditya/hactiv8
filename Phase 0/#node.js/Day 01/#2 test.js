var myObj = {
	name : 'radith',
	age : 25,
	print : function (){
		console.log(this.name +' is '+ this.age+ ' years old');
		console.log(this === myObj);
	}

};

function a() {
	console.log('aaa');
	console.log(this === global);
}

myObj.print();
console.log('------------')
a()

