var app = angular.module('app',[]);

app.controller('AlumnesController', ["$scope", "AlumnesFactory", function($scope, AlumnesFactory){

    vm = $scope;
    vm.visibilitatForm=false;
    vm.mostraDetall=false;
    vm.alumnes = AlumnesFactory.getAlumnes();
    vm.nouAlumne = {
        nom: "",
        telf: "",
        curs: ""
    };

    vm.Desar = function(){
        AlumnesFactory.setAlumne({nom:vm.nouAlumne.nom, telf:vm.nouAlumne.telf, curs:vm.nouAlumne.curs});
        vm.netejaNouAlumne();
        vm.MostraForm();
    };

    vm.MostraForm = function(){
        vm.visibilitatForm = !vm.visibilitatForm;
    };

    vm.netejaNouAlumne = function(){
        vm.nouAlumne.nom = vm.nouAlumne.telf = vm.nouAlumne.curs = "";
    };

    vm.mostraAlumne = function(index){
        AlumnesFactory.setIndex(index);
        //vm.$apply;
        vm.mostraDetall = !vm.mostraDetall;
    };

}]);




    