(function() {
    var app = angular.module('app', ['GestAlumnes']);

    app.directive('mostraAlumne', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/mostraAlumne.html'
        };
    });

    app.directive('mostraTotsAlumnes', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/mostraTotsAlumnes.html'
        };
    });

    app.directive('butoAfegirAlumne', function(){
        return {
            restrict: 'E',
            template: '<button ng-click="alum.MostraForm()" ng-hide="alum.visibilitatForm">Afegir Alumne</button>'
        };
    });

    app.directive('formAfegirAlumne', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/formAfegirAlumne.html',
            controller: function($scope, AlumnesFactory){
                this.nouAlumne = {
                    nom: "",
                    telf: "",
                    curs: "",
                };
                this.Desar = function(){
                    AlumnesFactory.setAlumne({nom:this.nouAlumne.nom, telf:this.nouAlumne.telf, curs:this.nouAlumne.curs});
                    this.netejaNouAlumne();
                    $scope.alum.MostraForm();
                };
                this.netejaNouAlumne = function(){
                    this.nouAlumne.nom = this.nouAlumne.telf = this.nouAlumne.curs = "";
                };
            },
            controllerAs: 'fAA'
        };
    });

    app.directive('mostraDetallAlumne', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/mostraDetallAlumne.html'
        };
    });
})();