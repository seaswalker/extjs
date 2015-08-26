<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	String path = request.getContextPath(); 
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/"; 
	pageContext.setAttribute("basePath", basePath); 
%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Window Demo</title>
	<base href="<%=basePath%>">
	<link rel="stylesheet" style="text/css" href="extjs4/resources/css/ext-all.css"></link>
	<script type="text/javascript" src="extjs4/ext-all.js"></script>
	<script type="text/javascript" src="extjs4/ext-lang-zh_CN.js"></script>
	<!-- MessageBox测试js -->
	<script type="text/javascript" src="script/windows.js"></script>
</head>
<body>
	<input type="button" id="btn" value="点击">
</body>
</html>