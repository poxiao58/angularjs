<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>this is a angularjs demo</title>
<script type="text/javascript" src="framework/angularjs_1.6.0/angular.min.js"></script>
</head>
<body ng-app="">
 this is a angularjs project !!<br>
<div ng-app="" ng-init="name='angularjs'">
 
<p>hello <span ng-bind="name"></span></p>
 
</div>
</body>
</html>