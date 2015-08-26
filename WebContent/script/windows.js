//测试Ext.window.Window

Ext.onReady(function() {
	
	//第一种创建方式,创建出来后默认是隐藏的，所以必须调用show方法
	/*var win = Ext.create("Ext.window.Window", {
		title: "第一个window",
		width: 300,
		height: 200
	});
	win.show();*/
	
	/*var win = new Ext.window.Window({
		title: "第一个window",
		width: 300,
		height: 200,
		//常用属性
		//modal: true,//模态
		constrain: true,//限制不能超出边界，这个很常用
		//constrainHeader: true,//title不能超出边界,
		//窗体出现的位置，相对于浏览器左上角的位置
		x: 50,
		y: 50,
		onEsc: function() {
			//默认情况下，Extjs的window按下Esc就会关闭，你可以复写此函数
			console.log("你按了ESC");
		},
		//可以自己加 内容
		html: "<span style='color:red;font-size:20px;'>我是html内容</span>",
		//超出边界时自己加滚动条
		autoScroll: true,
		//配置图标
		icon: "url",//图标的路径
		iconCls: "图标的样式(class)"
	});
	win.show();*/	

	/**
 	 * 实例:解决多个窗体的问题
 	 * 如果窗体有id属性，那么会交由Ext的窗体管理器管理，如果重复创建同样id的window会引发布局错误
 	 * 解决方式有三种:
 	 * a) 为window加上modal:true，这样window出现后，按钮将无法点击
 	 * b) 创建前先判断是否存在，如果不存在再创建,这是最为推荐的方式
 	 * c) 窗体的创建和显示分离
 	*/
	//get方法得到的是Ext包装的对象，而不是DOM对象，可通过dom属性获得被包装的对象
	Ext.get("btn").on("click", function() {
		/*Ext.create("Ext.window.Window", {
			title: "窗体",
			width: 300,
			height: 200,
			id: "win"
		}).show();*/
		
		//第二种方式
		if (!Ext.getCmp("win")) {
			Ext.create("Ext.window.Window", {
				title: "窗体",
				width: 300,
				height: 200,
				id: "win"
			}).show();
		}
		
		//第三种
		//win.show();
	});
	
	/*var win = Ext.create("Ext.window.Window", {
		title: "窗体",
		width: 300,
		height: 200,
		id: "win",
		//默认情况下window关闭后被销毁，所以关闭后再次打开会报错，需要修改此属性，但是这样可能会更加消耗资源
		closeAction: "hide"//默认为destory
	});*/
	
})