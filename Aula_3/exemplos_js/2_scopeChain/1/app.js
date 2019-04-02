function c() {
	var my_Var = 42;
	function b() {
	    var myVar;
		console.log(myVar);
	}
	b();
}
function a() {
	var myVar = 2;
    console.log(myVar);
	b();
}

var myVar = 1;
c();


