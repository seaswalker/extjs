//测试WindowGroup(Extjs4叫做ZIndexManager)
Ext.onReady(function() {

	var group = new Ext.WindowGroup();
	//注册window组件
	for (var i = 1;i <= 5;i ++) {
		group.register(new Ext.Window({
			title: "window" + i,
			width: 200,
			height: 300,
			id: "win" + i,
			//此处必须要有这个属性后面的hideAll等函数才可以执行，暂时不知道为什么
			renderTo: Ext.getBody()
		}));
	}
	
	//全部显示按钮
	new Ext.Button({
		text: "全部显示",
		handler: function(btn) {
			group.each(function(cmp) {
				cmp.show();
			});
		},
		renderTo: Ext.getBody()
	});
	
	//全部隐藏按钮
	new Ext.Button({
		text: "全部隐藏",
		handler: function(btn) {
			group.hideAll();
		},
		renderTo: Ext.getBody()
	});
	
	//显示到最前面
	new Ext.Button({
		text: "第二个显示到最前面",
		handler: function(btn) {
			group.bringToFront("win2");
		},
		renderTo: Ext.getBody()
	});
	
	//搞到最后面
	new Ext.Button({
		text: "第五个到最后面",
		handler: function(btn) {
			group.sendToBack("win5");
		},
		renderTo: Ext.getBody()
	});
	
});