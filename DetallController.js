app.controller('DetallController',["$scope", "AlumnesFactory", function($scope, AlumnesFactory){
    vm = $scope;
    vm.alm = AlumnesFactory.getAlumne();
}]);