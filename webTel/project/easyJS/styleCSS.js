/**
 * Created by Lenovo on 2016/11/21.
 */

//获取元素各边与页面上边和左边的距离。
function getRect(element) {
    //document.documentElement.clientTop; //非 IE 为 0，IE 为 2
   // document.documentElement.clientLeft; //非 IE 为 0，IE 为 2
    var rect = element.getBoundingClientRect();
    var top = document.documentElement.clientTop;
    var left = document.documentElement.clientLeft;
    return {
        top : rect.top - top, //元素上边距离页面上边的距离
        bottom : rect.bottom - top,//元素下边距离页面上边的距离
        left : rect.left - left, //元素右边距离页面左边的距离
        right : rect.right - left //元素左边距离页面左边的距离
    }

}

//跨浏览器兼容添加一条规则
var sheet = document.styleSheets[0];
// insertRule(sheet, "body", "background-color:red;", 0);
function insertRule(sheet, selectorText, cssText, position) {
	//如果是非 IE
	if (sheet.insertRule) {
		sheet.insertRule(selectorText + "{" + cssText + "}", position);
	//如果是 IE
	} else if (sheet.addRule) {
		sheet.addRule(selectorText, cssText, position);
	}
}
//跨浏览器兼容删除一条规则
function deleteRule(sheet, index) {
	//如果是非 IE
	if (sheet.deleteRule) {
		sheet.deleteRule(index);
	//如果是 IE
	} else if (sheet.removeRule) {
		sheet.removeRule(index);
	}
}


