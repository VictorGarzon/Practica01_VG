function loaded() {
    activo = document.getElementById("activo").className;
    if (activo == "mini breda"){
        activarb()
    }
    if (activo == "mini venus"){
        activarve()
    }
    if (activo == "mini vulcano"){
        activarvu()
    }
    if (activo == "mini meninas"){
        activarm()
    }
    if (activo == "mini inocencio"){
        activari()
    }
}

function activarb() {
    document.getElementsByClassName("mini")[1].removeAttribute("id");
    document.getElementsByClassName("mini")[2].removeAttribute("id");
    document.getElementsByClassName("mini")[3].removeAttribute("id");
    document.getElementsByClassName("mini")[4].removeAttribute("id");
    document.getElementsByClassName("breda")[0].setAttribute("id","activo");
    document.getElementById("imagen").src="img/breda.jpg";
}
function activarve() {
    document.getElementsByClassName("mini")[0].removeAttribute("id");
    document.getElementsByClassName("mini")[2].removeAttribute("id");
    document.getElementsByClassName("mini")[3].removeAttribute("id");
    document.getElementsByClassName("mini")[4].removeAttribute("id");
    document.getElementsByClassName("venus")[0].setAttribute("id","activo");
    document.getElementById("imagen").src="img/venus.jpg";
}
function activarvu() {
    document.getElementsByClassName("mini")[0].removeAttribute("id");
    document.getElementsByClassName("mini")[1].removeAttribute("id");
    document.getElementsByClassName("mini")[3].removeAttribute("id");
    document.getElementsByClassName("mini")[4].removeAttribute("id");
    document.getElementsByClassName("vulcano")[0].setAttribute("id","activo");
    document.getElementById("imagen").src="img/vulcano.jpg";
}
function activarm() {
    document.getElementsByClassName("mini")[0].removeAttribute("id");
    document.getElementsByClassName("mini")[1].removeAttribute("id");
    document.getElementsByClassName("mini")[2].removeAttribute("id");
    document.getElementsByClassName("mini")[4].removeAttribute("id");
    document.getElementsByClassName("meninas")[0].setAttribute("id","activo");
    document.getElementById("imagen").src="img/meninas.jpg";
}
function activari() {
    document.getElementsByClassName("mini")[0].removeAttribute("id");
    document.getElementsByClassName("mini")[1].removeAttribute("id");
    document.getElementsByClassName("mini")[2].removeAttribute("id");
    document.getElementsByClassName("mini")[3].removeAttribute("id");
    document.getElementsByClassName("inocencio")[0].setAttribute("id","activo");
    document.getElementById("imagen").src="img/inocencio.jpg";
}