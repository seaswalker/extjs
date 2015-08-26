Ext.onReady(function() {
	
	//this是指作用域，此处的this即为window
	Ext.MessageBox.alert("这是标题", "这是内容", function() {
		//点击确定后的回调函数
		console.log("你点击了");
	}, this);
	
	//传给回调函数的op参数是指点击的是确定还是取消,作用域默认即是window
	Ext.MessageBox.confirm("这是标题", "问题本身", function(op) {
		if (op === "yes") {
			console.log("点击了确定");
		} 
		if (op === "no") {
			console.log("点击了取消");
		}
	}, this);
	
	//显示一个消息盒子
	Ext.MessageBox.show({
		title: 'Address',
	    msg: 'Please enter your address:',
	    width: 300,
	    buttons: Ext.Msg.OKCANCEL,
	    multiline: true,
	    fn: function(op, text) {
	    	//op也是代表点击的按钮的字符串，可取为的值随上面buttons的类型变化，总体来说一共有:ok yes no cancel
	    	//text为如果‘prompt’或者‘multiline’为真时，输入框显示的值
	    	console.log(op);
	    	console.log(text);
	    },
	    icon: Ext.window.MessageBox.INFO
	});
	
	//显示一个带进度条的提示盒子
	Ext.MessageBox.wait("这是消息盒体内容", "这是可选标题", {
		//动画效果，这样比较平缓
		animate : true,
		//每隔多长时间来一遍
		interval: 500,
		//总共运行多长时间
	    duration: 50000,
	    //增加多少次完成
	    increment: 15,
	    text: 'Updating...',
	    scope: this,
	    fn: function(){
	       console.log("进度完成");
	    }
	});
	
});