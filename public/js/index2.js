/**
 * Created by Miguel on 3/11/2016.
 */
$(document).ready(function () {
    Example();
});

function Example(){
    var letra = ["A","B","D"];
    setInterval(function () {
        //generar el turno
        var turno = {
            puesto:`0${(Math.floor(Math.random() * 9) + 1)}`,
            turno: `${letra[((Math.floor(Math.random()*3)))]}${Math.floor(Math.random() * 300) + 1}`
        }
        //cargar el nuevo turno
        var oldTurno =CargarNuevoTurno(turno);
        //parpaear
        StartParpadeo();
        //eliminar el turno de la ultima fila
        EliminarUltimoTurno(function () {
            AgregarTurnoDesplazado(oldTurno);
        });
        //agregar el principio el turno que fue remplazado
        //;
    },10000);
}

function parpadear() {
     var $turnoFirst = $(".first > div[content-type='turno']");
     var $turno = $turnoFirst.children().eq(0);
     var $puesto = $turnoFirst.children().eq(1);
     var color = $turno.css("color");
     if(color == "rgb(255, 255, 255)"){
         $turno.css("color","#0084c2");
         $puesto.css("color","#189dde");
     }else{
         $turno.css("color","white");
         $puesto.css("color","white");
     }
}

function StartParpadeo() {
    var cont = 0;
    var parpadeo = setInterval(function () {
        parpadear();
        cont++;
        if(cont == 8){
            clearInterval(parpadeo);
        }
    },300);
}

function CargarNuevoTurno(turno){
    var $turnoFirst = $(".first > div[content-type='turno']");
    var $turno = $turnoFirst.children().eq(0);
    var $puesto = $turnoFirst.children().eq(1);
    var turnoOld = {
        puesto:$puesto.text(),
        turno:$turno.text()
    }
    $turno.text(turno.turno);
    $puesto.text(turno.puesto);
    return Object.assign(turnoOld);
}

function EliminarUltimoTurno(callback){
    var $ultimo = $(".container-fluid").children().eq(4);
    $ultimo.effect("drop", {}, 1000, function(){
        $ultimo.remove();
        callback();
    });
}
function AgregarTurnoDesplazado(oldTurno){
    var $row = $("<div/>",{
        "class":"row oculto",
        html:$("<div/>",{
            "content-type":"turno",
            html:[
                $("<div/>",{
                    "class":"col-xs-6 colorTurno fontTurnoOld",
                    text:oldTurno.turno
                }),
                $("<div/>",{
                    "class":"col-xs-6 colorPuesto fontTurnoOld",
                    text:oldTurno.puesto
                })
            ]
        })
    });
    $(".first").after($row);
    $row.show("drop",{},1000,function(){

    });
}