var app = angular.module('app',[]);

app.controller('DetallController',["$scope", "AlumnesFactory", function($scope, AlumnesFactory){
    vm = $scope;
    vm.alm = AlumnesFactory.getAlumne();
}]);