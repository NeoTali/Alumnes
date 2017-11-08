
app.controller('DetallController', function(AlumnesFactory){
    var ctrl = this;
    ctrl.alm = AlumnesFactory.getAlumne();

    ctrl.mostraAlumne = function() {
        ctrl.alm = AlumnesFactory.getAlumne();
    };
});