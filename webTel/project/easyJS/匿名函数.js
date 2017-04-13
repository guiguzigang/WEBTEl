/**
 * Created by Lenovo on 2016/11/21.
 */

// 将匿名函数  赋值给变量
var box = function(){
    return 'gavin';
}


// 将匿名函数自我执行的的返回值   赋给变量
var box2 = (function(){
    return 'gavin';
})();    // (匿名函数)();  第一个圆括号方匿名函数，第二个圆括号执行；

// 自我执行匿名函数的传参
(function(age){
    alert(age);
})(100);

// 函数里放一个匿名函数
function box3(){
    return function(){     //函数里的匿名函数，产生闭包
        return 'gavin';
    }
}
 // alert(box3()()) ;    // 可以将函数中的匿名函数的返回值输出
var b = box3();
alert(b);
alert(b());


//这样也可以自我执行
var a = function(){
	alert('');
}();