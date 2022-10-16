function loaded() {
    activo = document.getElementById("activo").className;
    if (activo == "breda"){
        activarb()
    }
    if (activo == "venus"){
        activarve()
    }
    if (activo == "vulcano"){
        activarvu()
    }
    if (activo == "meninas"){
        activarm()
    }
    if (activo == "inocencio"){
        activari()
    }
}

function activarb() {
    document.getElementById("activo").removeAttribute("id");
    document.getElementsByClassName("breda")[0].setAttribute("id","activo");
    document.getElementById("imagen").src="img/breda.jpg";
    document.getElementById("nombre").innerText="RENDICIÓN DE BREDA";
    document.getElementById("fecha").innerText="1634-35";
    document.getElementById("precio").innerText="380€";
    document.getElementById("descripcion").innerText="Réplica del cuadro a colores originales y tamaño 150 x 80cm";
}
function activarve() {
    document.getElementById("activo").removeAttribute("id");
    document.getElementsByClassName("venus")[0].setAttribute("id","activo");
    document.getElementById("imagen").src="img/venus.jpg";
    document.getElementById("nombre").innerText="VENUS DEL ESPEJO"
    document.getElementById("fecha").innerText="1644-1648";
    document.getElementById("precio").innerText="432€";
    document.getElementById("descripcion").innerText="Réplica del cuadro a colores originales y tamaño 230 x 150cm";

}
function activarm() {
    document.getElementById("activo").removeAttribute("id");
    document.getElementsByClassName("meninas")[0].setAttribute("id","activo");
    document.getElementById("imagen").src="img/meninas.jpg";
    document.getElementById("nombre").innerText="LAS MENINAS"
    document.getElementById("fecha").innerText="1616-1660";
    document.getElementById("precio").innerText="1250€";
    document.getElementById("descripcion").innerText="Réplica del cuadro a colores originales y tamaño 400 x 350cm";
}
function activarvu() {
    document.getElementById("activo").removeAttribute("id");
    document.getElementsByClassName("vulcano")[0].setAttribute("id","activo");
    document.getElementById("imagen").src="img/vulcano.jpg";
    document.getElementById("nombre").innerText="LA FRAGUA DE VULCANO"
    document.getElementById("fecha").innerText="1630";
    document.getElementById("precio").innerText="375€";
    document.getElementById("descripcion").innerText="Réplica del cuadro a colores originales y tamaño 170 x 120cm";
}
function activari() {
    document.getElementById("activo").removeAttribute("id");
    document.getElementsByClassName("inocencio")[0].setAttribute("id","activo");
    document.getElementById("imagen").src="img/inocencio.jpg";
    document.getElementById("nombre").innerText="EL PAPA INOCENCIO X"
    document.getElementById("fecha").innerText="1650";
    document.getElementById("precio").innerText="180€";
    document.getElementById("descripcion").innerText="Réplica del cuadro a colores originales y tamaño 80 x 140cm";
}
function zoom(){
    if (document.getElementById("zoom") == null){
        document.getElementsByTagName("article")[0].setAttribute("id", "zoom");
    }
    else{
        document.getElementsByTagName("article")[0].removeAttribute("id");
    }
}