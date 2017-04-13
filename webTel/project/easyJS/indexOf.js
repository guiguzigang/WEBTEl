/**
 * Created by Lenovo on 2016/11/20.
 */
/*
indexOf(str, n) 从 n 开始搜索的第一个 str，并将搜索的索引值返回 不写n默认从0开始
lastIndexOf(str, n) 从 n 开始搜索的最后一个 str，并将搜索的索引值返回
*/
//示例：找出全部的 L
var box = 'Mr.Lee is Lee'; //包含两个 L 的字符串
var boxarr = []; //存放 L 位置的数组
var pos = box.indexOf('L'); //先获取第一个 L 的位置
while (pos > -1) { //如果位置大于-1，说明还存在 L
    boxarr.push(pos); //添加到数组
    pos = box.indexOf('L', pos + 1); //从新赋值 pos 目前的位置
}
alert(boxarr); //输出


var str = 'abcdefg';
alert(str.substr(str.indexOf('efg'),3));