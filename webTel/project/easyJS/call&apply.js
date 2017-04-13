/**
 * Created by Lenovo on 2016/11/21.
 */

function box(num1, num2) {
    return num1 + num2; //原函数
}
function sayBox(num1, num2) {
    return box.apply(this, [num1, num2]); //this 表示作用域，这里是 window
} //[]表示 box 所需要的参数
//这时 sayBox() == box() ;
// apply 与 call 可以冒充另一个函数
function sayBox2(num1, num2) {
    return box.apply(this, arguments); //arguments 对象表示 box 所需要的参数
}
// sayBox() == sayBox2()  ;
function sayBox(num1, num2) {
    return box.call(this, num1, num2); //和 apply 区别在于后面的传参 不传数组，传参数
}
// call 与 apply 主要用于改变作用域
var color = '红色的'; //或者 window.color = '红色的';也行
var b = {
    color : '蓝色的'
};
function sayColor() {
    alert(this.color);
}
sayColor(); //作用域在 window
sayColor.call(this); //作用域在 window
sayColor.call(window); //作用域在 window
sayColor.call(b); //作用域在 box，对象冒充