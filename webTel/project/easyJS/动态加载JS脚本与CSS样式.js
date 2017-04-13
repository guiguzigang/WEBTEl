var flag = true;
//执行顺序理解的问题
if(flag){
    loadscript('url')// url 为JS文件路径
}
//动态加载JS文件
function loadscript(url){
    var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
    //document.head.appendChild(script); //document.head 表示<head>  但IE不支持
    document.getElementsByTagName('head')[0].appendChild(script);
}

//动态执行JS语句
if(flag){
    var script = document.createElement('script');
        script.type = 'text/javascript';
    // IE不支持这种写法
   // script.appendChild(document.createTextNode("alert('Gavin')"))
    script.text = "alert('Gavin')";
    document.getElementsByTagName('head')[0].appendChild(script);
}
//动态加载CSS样式
if(flag){
    loadStyle('basic.css');
}
function loadStyle(url){
    var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}


//动态执行style样式
if(flag){
    var style = document.createElement('style');
        styel.type = 'text/css';
    //var box= document.createTextNode(#box{background:red}'); IE 不支持
    //style.appendChild(box);
    document.getElementsByTagName('head')[0].appendChild(style);
    //document.styleSheets一组关于文档样式表片段集
    insertRule(document.styleSheets[0], '#box', 'background:red', 0);
}
/*
 sheet style样式容器
 selectorText : 选择器 如#id .class等
 cssText ：css样式
 position ：位置
 */
function insertRule(sheet , selectorText , cssText , position){
    //如果是非IE
    if(sheet.insertRule){
        sheet.insertRule(selectorText + "{"+ cssText +"}" ,position);
    //如果是IE
    }else if(sheet.addRule){
        sheet.addRule(selectorText,cssText,position);
    }
}