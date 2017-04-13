define(function(require, exports, module){
	var btn = document.querySelector("button");
	var obj = document.querySelector("#obj");
	var scale = document.querySelector("#scale");
	var drag = document.querySelector("#drag");

	require("drag.js").drag(drag);

	btn.onclick = function(){
		obj.style.display = "block";
		// require("scale.js").scale(obj, scale);
		// 
		// 异步，按需加载
		require.async("scale.js", function(ex){
			ex.scale(obj, scale);
		});
	};
});