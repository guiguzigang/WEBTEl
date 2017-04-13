/**
 * Created by Lenovo on 2016/11/21.
 */

function box(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * box(num-1); //一个简单的的递归
    }
}
function boxArg(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num-1);//使用 callee 来执行自身
    }
}
//  arguments.callee 调用自己本身的方法
alert(box(4));  // 24
alert(boxArg(4));  // 24
