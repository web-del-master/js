function sum(a, b) {
	return a + b > 5;
}
sum(2,2)


let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

var each = function(startArr, f){return f(startArr);};
var array = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
};

console.log(each(array, myFunc));

let  assert = require('chai').assert

describe("sum", function(){
	it("получаем булево значение", function(){
		assert.typeOf(sum(2,3), 'boolean');
	})
})
describe("num", function(){
	it("Соответствие занчению 5", function(){
		assert.equal(num,5)
	})
})
describe("array", function(){
	it("Соответствие типу данных", function(){
		assert.typeOf(each(array, myFunc), 'array')
	})
})
describe("array", function(){
	it("соответствие ожидаемому результату", function(){
		assert.deepEqual(each(array, myFunc), [ 8, 7, 6, 5, 4 ])
	})
})
describe("array", function(){
	it("соответствие ожидаемому результату", function(){
		assert.lengthOf(each(array, myFunc), 5)
	})
})