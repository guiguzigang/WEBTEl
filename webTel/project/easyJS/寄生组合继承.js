/**
 * Created by Lenovo on 2016/11/21.
 */
//6.寄生组合继承

//临时中转函数
function obj(o) {				//o表示将要传递进入的一个对象
    function F() {}				//F构造是一个临时新建的对象，用来存储传递过来的对象
    F.prototype = o;			//将o对象实例赋值给F构造的原型对象
    return new F();			//最后返回这个得到传递过来对象的对象实例
}

//F.prototype = o 其实就相当于 Desk.prototype = new Box();
//寄生函数
function create(box, desk) {
    var f = obj(box.prototype);
    f.constructor = desk;				//调整原型构造指针
    desk.prototype = f;
}

function Box(name, age) {
    this.name = name;
    this.age = age;
}

Box.prototype.run = function () {
    return this.name + this.age + '运行中...'
}

function Desk(name, age) {
    Box.call(this, name, age);				//对象冒充
    //Box.apply(this,arguments);
}

//通过寄生组合继承来实现继承
create(Box, Desk);							//这句话用来替代Desk.prototype = new Box();


var desk = new Desk('Lee', 100);
alert(desk.run());
alert(desk.constructor);