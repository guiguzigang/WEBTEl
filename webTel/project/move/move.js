function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, json, fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;//假设所有运动都到达目标位置
		for(var attr in json){
			var iCur, iSpeed;
			// 1.取当前的值
			if(attr == 'opacity'){
				iCur = Math.round(parseFloat(getStyle(obj, attr))*100);
			} else {
				iCur = parseInt(getStyle(obj, attr));
			}
			// 2、算速度
			iSpeed = (json[attr] - iCur)/8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			// 3、检测停止
			if(iCur != json[attr]){ // 只要有一个属性的运动没有到达终点，就不清除定时器；
				flag = false;
			}
			
			iCur += iSpeed;
			
			if(attr == 'opacity'){
				
				obj.style.filter = 'alpha(opacity='+ iCur +')';
				obj.style.opacity = iCur/100;
			} else {
				obj.style[attr] = iCur + 'px';
			}
			
			if(flag){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		}
	},30)
}









































