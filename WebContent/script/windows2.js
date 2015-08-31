//Window组件 Demo2

Ext.onReady(function() {
	
	var win = new Ext.window.Window({
		title: "测试window",
		width: 200,
		height: 300,
		//不可以拖动
		draggable: false,
		closable: false,
		//无法修改大小
		resizable: false,
		//可以折叠
		collapsible: true,
		//添加组件,可以使用xtype和new的方式，但是推荐xtype的方式
		items: [
			{
				xtype: "panel",
				html: "我是Panel",
				width: 200,
				height: 200
			},
			{
				xtype: "button",
				text: "按钮一",
				//回调函数提供一个btn参数，就是此按钮
				handler: function(btn) {
					alert("我是按钮一");
				}
			},
			new Ext.Button({
				text: "按钮二",
				handler: function(btn) {
					alert("我是" + btn.text);
				}
			})
		]
	});
	//win.show();
	
	/**
	 * 测试子组件获取父组件的信息
	 * 此处打印出父window的title
	 */
	var win2 = Ext.create("Ext.window.Window", {
		title: "测试获取父组件内容",
		width: 300,
		height: 400,
		id: "win2",
		//工具栏tbar = top bar,同理还有lbar, bbar, rbar, fbar(foot)
		tbar: [
			{
				text: "按钮一",
				handler: function(btn) {
					//第一种方式，通过up()和down()函数，此两个函数接收一个String形式的xtype或者选择器参数
					alert(btn.up("window").title);
				}
			},
			{
				text: "按钮二",
				handler: function(btn) {
					//第二种方式，直接通过window的id获取
					alert(Ext.getCmp("win2").title);
				}
			},
			{
				text: "按钮三",
				handler: function(btn) {
					//方法三，使用ownerCt属性,此属性指组件所属的 Container (当前组件被添加到一个容器中时此值被自动设置)
					alert(btn.ownerCt.ownerCt.title);
				}
			}
		]
	});
	
	win2.show();
	
});