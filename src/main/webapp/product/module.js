//module.jsp文件中所需的js文件
var app = angular.module('app', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "LeBron";
    $scope.lastName= "James";
});