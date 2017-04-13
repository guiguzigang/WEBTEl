/**
 * Created by Lenovo on 2016/11/21.
 */
//splice()主要用途是向数组的中部插入元素。
var box = ['李炎恢', 28, '盐城']; //当前数组
var box2 = box.concat('计算机编程'); //创建新数组，并添加新元素 当前数组box没有任何变化

var box3 = box.splice(1); //box.slice(1,3)，2-4 之间的元素

var box4 = box.splice(0,2); //截取前两个元素

var box5 = box.splice(1,0,'计算机编程','江苏'); //没有截取，但插入了两条

var box6 = box.splice(1,1,100); //截取了第 2 条，替换成 100
alert(box2); //输出截取的 28
alert(box); //输出数组