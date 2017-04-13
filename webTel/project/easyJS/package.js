
(function GetArg(){

	getArg : function(obj, temp){
		var args = location.href + '?' ;
		for(var i in obj){
			args +=  i + '=' + obj.i + '&';
		});
		window.location.href = args;
		return args;
	},




})();

function getArg(obj){
	var args = location.href + '?' ;
	for(var i in obj){
		args +=  i + '=' + obj.i + '&';
	});
	window.location.href = args;
	console.log(args);
	return args;
}

function getValue(selector){
	return selector.value;
}


$('.search').on('click', function(){
	$(this).val();
	// $()
})