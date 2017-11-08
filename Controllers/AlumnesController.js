(function() {    
    var app = angular.module('app');

    app.controller('AlumnesController', function(AlumnesFactory){

        var ctrl = this;
        ctrl.alm = [];
        ctrl.visibilitatForm=false;
        ctrl.mostraDetall=false;
        ctrl.alumnes = AlumnesFactory.getAlumnes();

        ctrl.MostraForm = function() {
            ctrl.visibilitatForm = !ctrl.visibilitatForm;
        };
        ctrl.mostraAlumne = function(nom){
            ctrl.alm = AlumnesFactory.getAlumne(nom);
            ctrl.mostraDetall = true;
        };

        ctrl.amagaDetall = function(){
            ctrl.mostraDetall = false;
        };
    });
})();