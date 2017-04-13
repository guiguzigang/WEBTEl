;(function($, doc, win){
	var VM = function(opt) {
		this.setting = {};
		$.extend(this.setting, opt.data);

		// 初始化VM；
		this.init();
	};
	VM.prototype = {
		init: function() {
			//this.render('input');
			this.render('input') || this.render('textarea') || this.render('select');
			// ?? 有什么更好的方法替代
			this._render('p') || this._render('div') || this._render('span') || this._render('li') || this._render('a') || this._render('h1')  || this._render('h2') || this._render('h3') || this._render('h4');
		},
		/**
		 * [render input框渲染]
		 * @[param] {[type]} dom [input]
		 */
		render: function(dom) {
			var _self = this,
				data = _self.setting;
			// 遍历dom中所有的input，搜寻带xq-model指令的input
			$(dom).each(function() {
				var _attr = $(this).attr('xq-model')
				// 判断是否有对应data数据
				if(_attr !== undefined){
					if(data[_attr] !== undefined){
						$(this).attr('value', data[_attr]);
						// 调用input值改变方法
						_self.inputChange($(this), _attr);
					}
				}
			});
		},
		/**
		 * [_render 标签渲染]
		 * @param  {[type]} dom [element]
		 */
		_render: function(dom) {
			var _self = this;
			// 遍历标签，拿到里面的内容
			$(dom).each(function() {
				var val = $(this).html() || $(this).text() || $(this).val();
				// 判断是否存在{{}} ，并截取拿到{{}} 里面的内容
				if(val.indexOf('}}') !== -1 && val.indexOf('{{') !== -1){
					val = val.replace(/^\s+|{{|\s+/g, '');
					val = val.replace(/}}|[\s+]/g, '');
					//val = $.trim(val);
					_self.labelChange(this, val);
				}
			});
		},
		/**
		 * [labelRender 标签实时渲染]
		 * @param  {[type]} dom   [element]
		 * @param  {[type]} _attr [当前data数据的key]
		 */
		labelRender: function(dom, _attr) {
			var _self = this,
				data = _self.setting;
			$(dom).each(function(){
				// 通过labelChange获取对应data数据的attr属性
				var val = $(this).attr(_attr);
				if(val !== undefined ) {
					if(data[_attr] !== undefined) {
						$(this).html(data[_attr]) || $(this).text(data[_attr]) || $(this).val(data[_attr]);
					}
				}
			});
		},
		/**
		 * [inputChange 值改变]
		 * @param  {[type]} _this  [当前input]
		 * @param  {[type]} _attr  [当前绑定对应的data数据]
		 */
		inputChange: function(_this, _attr) {
			var _self = this,
				data = _self.setting;
			// 绑定键盘事件进行监听
			_this.unbind('keydown');
			_this.keydown(function() {
				_this.unbind('keyup');
				_this.keyup(function() {
					var changeVal = _this.val(),
						oldVal = data[_attr];
					data[_attr] = changeVal;
					// 调用input框渲染方法
					_self.render(_this[0]); // 上面_this传入的是$(this),因此需要加在[0]
					// 调用标签值改变渲染方法
					_self.labelRender('p', _attr);
				});
			});
		},
		/**
		 * [labelChange description]
		 * @param  {[type]} _this [当前input]
		 * @param  {[type]} val   [用户输入的值]
		 */
		labelChange: function(_this, val) {
			var _self = this,
				data = _self.setting;
			if(val !== undefined) {
				if(data[val] !== undefined) {
					$(_this).html(data[val]) || $(_this).text(data[val]) || $(_this).val(data[val]);
				}
			}
			// 给当前对象绑定一个属性对应其data数据
			$(_this).attr(val, '');
		},
	};
	win.VM = VM;
})(jQuery, document, window);
