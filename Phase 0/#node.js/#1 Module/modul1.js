//export cara cepaat dengan membuat menjadi json
module.exports = {
	saya  : 'Franaditya',
	umur  : 28,
	cetak : function (){
		console.log("I'm a function");
		console.log(this.saya + ' ===> ' + this.umur );
	}
};

// export per variable
var name = 'radith';
var age = 25;

function print() {
	console.log('My name is '+ name + ". I'm " + age + ' years old');
};

//nama varible export bebas / sama dengan varible yang akan diexport juga gpp
module.exports.myName = name;
module.exports.age = age;
module.exports.print = print();




