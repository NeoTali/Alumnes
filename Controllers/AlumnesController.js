
app.controller('AlumnesController', function(AlumnesFactory){

    var ctrl = this;
    ctrl.visibilitatForm=false;
    ctrl.mostraDetall=false;
    ctrl.alumnes = AlumnesFactory.getAlumnes();
    ctrl.nouAlumne = {
        nom: "",
        telf: "",
        curs: "",
    };

    ctrl.Desar = function(){
        AlumnesFactory.setAlumne({nom:ctrl.nouAlumne.nom, telf:ctrl.nouAlumne.telf, curs:ctrl.nouAlumne.curs});
        ctrl.netejaNouAlumne();
        ctrl.MostraForm();
    };

    ctrl.MostraForm = function(){
        ctrl.visibilitatForm = !vm.visibilitatForm;
    };

    ctrl.netejaNouAlumne = function(){
        ctrl.nouAlumne.nom = ctrl.nouAlumne.telf = ctrl.nouAlumne.curs = "";
    };

    ctrl.mostraAlumne = function(index){
        AlumnesFactory.setIndex(index);
        ctrl.mostraDetall = !ctrl.mostraDetall;
    };

});