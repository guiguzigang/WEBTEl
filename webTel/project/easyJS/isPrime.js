

/**
 * [isPrime description]  验证是否是整数
 * @param  {[type]}  number [description]
 * @return {Boolean}        [description]
 */
function isPrime(number){
	// if your brower dosen't support the method Number.isInteger of ECMAScript 6,
	// you can implement your own pretty easily
	if( typeof number !== "number" || !Number.isInteger(number) ){
		return false;
	}
	if( number <2 ){
		return false;
	}
	if( number === 2 ){
		return true;
	} else if( number % 2 === 0 ){
		return false;
	}
	var squareRoot = Math.sqrt(number);
	for( var i = 3; i <= squareRoot; i += 2){
		if( number%i === 0){
			return false;
		}
	}
	return true;
}
/*
Number.isInteger = function (number){
	if(number < 0 && number.toString().indexOf('.') > 0) {
		return false;
	}
	return true;
}*/


var a = {};
var b = { name : 20 };
$.extend(a , b); // 默认浅拷贝
a.name = 30;  	 // 改变a的值
console.log(b.name);  ==> 20  // b的值没改变

var a = {};
var b = { name : { age : 20 } };
$.extend(a , b);
a.name.age = 30;  
console.log( b.name.age ); ==> 30  // b的值改变

var a = {};
var b = { name : { age : 20 } };
$.extend(true, a, b);  // 深拷贝
a.name.age = 30;
consoel.log( b.name.age );  ==> 20  // b的值没改变