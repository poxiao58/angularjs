//module.jsp文件中所需的js文件
/**
 * 此操作是展示angularjs的指令module以及controller
 */
var app = angular.module('app', []);
app.controller('myCtrl', ['$scope',function($scope) {
    $scope.firstName= "LeBron";
    $scope.lastName= "James";
}]);