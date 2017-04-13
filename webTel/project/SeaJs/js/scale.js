define(function(require, exports, module){
	function scale(obj, conObj){
		var disX = 0;
		var disY = 0;
		var disW = 0;
		var disH = 0;
		conObj.onmousedown = function(ev){
			var ev = ev || window.event;
			disX = ev.clientX;
			disY = ev.clientY;
			disW = obj.offsetWidth;
			disH = obj.offsetHeight;

			document.onmousemove = function(ev){
				var ev = ev || window.event;
				var W = require('range.js').range(ev.clientX - disX + disW, 500, 100);
				var H = require('range.js').range(ev.clientY - disY + disH, 500, 100);
				obj.style.width = W + 'px';
				obj.style.height = H + 'px';
			}

			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
			};
		};
	}

	exports.scale = scale;
});