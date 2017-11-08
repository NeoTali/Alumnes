angular.module('GestAlumnes', [])
.factory('AlumnesFactory', function (){
        var alumnes = [
            {nom: "Joan Blanc", telf: "1122334455", curs: "Primer ESO"},
            {nom: "Anna Matas", telf: "6677889900", curs: "Segón ESO"},
            {nom: "Josep Piera", telf: "1234567890", curs: "Primer ESO"},
            {nom: "Marvin Harris", telf: "0987654321", curs: "Tercer ESO"},
        ];
        var index = 0;
        var grupAlumnes = {
            getAlumnes: function(){
                return alumnes;
            },
            getAlumne: function(nom){
                for (var i=0;i<alumnes.length;i++) {
                    if (alumnes[i].nom === nom) {
                        return alumnes[i];
                    }
                }
            },    
            setAlumne: function(alumne){
                alumnes.push(alumne);
            },
            setIndex: function(valor){
                index = valor;
            }
        };
        return grupAlumnes;
    });