var person = new Object();

person["firstname"] = "Alberto";
person["lastname"] = "Roberto";
person.idade = 31;
var func = function(){
	var h = 12;
	console.log(h);
}

person.func = func;

var firstNameProperty = "firstname";

console.log(person.firstname);
console.log(person.lastname);