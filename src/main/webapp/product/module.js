//module.jsp�ļ��������js�ļ�
/**
 * �˲�����չʾangularjs��ָ��module�Լ�controller
 */
var app = angular.module('app', []);
app.controller('myCtrl', ['$scope',function($scope) {
    $scope.firstName= "LeBron";
    $scope.lastName= "James";
}]);