/**
 * 作为replace方法第二个参数的替换函数，可以接受多个参数。
 * 第一个参数是捕捉到的内容;
 * 第二个参数是捕捉到的组匹配（有多少个组匹配，就有多少个对应的参数）;
 * 此外，最后还可以添加两个参数，
 * 倒数第二个参数是捕捉到的内容在整个字符串中的位置（比如从第五个位置开始）;
 * 最后一个参数是原字符串。下面是一个网页模板替换的例子。
 */

var prices = {
  'pr_1': '$1.99',
  'pr_2': '$9.99',
  'pr_3': '$5.00'
};

var template = '<span id="pr_1"></span><span id="pr_2"></span><span id="pr_3"></span>'; // 这里可以放网页模块字符串
// 匹配函数的作用是将价格插入模板中。
template.replace(
  /(<span id=\")(.*?)(\">)(<\/span>)/g,
  function(match, $1, $2, $3, $4){
    return $1 + $2 + $3 + prices[$2] + $4;
  }
);



(function(window){
    function fn(str){
        this.str=str;
    }

    fn.prototype.format = function(){
        var arg = arguments;
        return this.str.replace(/\{(\d+)\}/g,function(a, b){

            return arg[b] || '';
      });
    }
    window.fn = fn;
})(window);

//use
(function(){
    var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
    console.log(t.format('http://www.alibaba.com','Alibaba','Welcome'));
})();


