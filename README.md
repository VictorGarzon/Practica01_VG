# PRACTICA_01
## [HTML](#thtml)
## [CSS](#tcss)
### [Titulo](#ctitulo)
### [Aside](#caside)
### [Section](#csection)
#### [Article](#csarticle)
#### [Div](#csdiv)
## [JAVASCRIPT](#tjava)
### [function loaded()](#floaded)
### [function activar()](#factivar)
### [function zoom()](#fzoom)
<a name="thtml"></a>
## HTML
El html fue lo más sencillo en el body se encuentra una función al cargar el body (explicada [abajo](#floaded)),
para el titulo he utilizado header con h1,
la parte de la izquierda es un aside con cada img y separada con br , cada una tiene una clase única y uno tiene un id para saber cuál es el activo y también tiene una función de clic para cada única (explicada más [abajo](#factivar)).
Después se encuentra el section con el article con una función de clic (explicada más [abajo](#fzoom)) que contiene un img con donde se encontrar las imágenes en grande y por ultimo el div que contiene los h1 y h2 cada uno con un id para facilitar la inserción de datos
<a name="tcss"></a>
## CSS
El css empieza con importar la letra de Google Fonts,
seguido de la letra puesta para todo el contenido.
<a name="ctitulo"></a>
### Titulo
Para alinear el titulo he utilizado:
```CSS
Dispaly: flex;
align-items: center;
justify-content: center;
```
<a name="caside"></a>
### Aside
En el aside he utilizado:
Para que se fije y no se mueva:
```CSS
Position: fixed;
```
Hacer scroll:
```CSS
overflow: auto;
```
Pegarlo a la izquierda:
```CSS
top: 100px;
width: 200px;
bottom: 0;
left: 0;
```
Con las imágenes he utilizado,
Para que se encuentren centras:
```CSS
margin: auto;
display: block;
```
Filtro gris con:
```CSS
filter: grayscale(1);
```
He puesto un :hover para que al pasar el ratón se quite el filtro gris con una transición de 3s he puesto:
```CSS
aside img:hover {
    filter: grayscale(0);
    transition-duration: 3s;
}
```
También tengo que tener en cuenta que cuando tengan el id activo no tenga el filtro en gris, asi que he utilizado:
```CSS
aside img#activo{
    filter: grayscale(0);!important;
}
```
<a name="csection"></a>
### Section
Lo primero fue hacer la seccion en el luhar y tamaño correesto, empezando desce donde acaba el aside: 
```CSS
    margin-left: 200px;
    height: 100%;
    position: relative;
```
<a name="csarticle"></a>
#### Article
El article tenia que ocupar el 50% del section y que funcionara como un bloque asi que he puesto:
```CSS
 width: 50%;
 display: inline-block;
```
##### Img
la imagen tiene que tener el 100% del article y que se recorte al redimensionar la pantalla:
```CSS
    width: 100%;
    height: 100%;
    object-fit: cover;
```
##### Zoom
zoom es una id que se pondra al hacer clic al article y la imagen se pondra en medio y el resto en negro:
```CSS
section article#zoom {
    display: flex;
    position: fixed;
    z-index: 1;
    top: 0;
    margin-left: 13%;
}
section article#zoom:after{
    content: " ";
    background-color:black;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index:0;
}
```
<a name="csdiv"></a>
#### Div
El div ocupara el resto del select, que funcione como bloque, que este centrado y que no se base:
```CSS
    width: 45%;
    display: inline-block;
    text-align: center;
    white-space: initial;
    position: relative;
    top: -5%;
```
Y el boton es un h2 con padding , con un borde y color de fondo dependiendo de si se tien el raton encima:
```CSS
section div h2:nth-last-of-type(1){
    padding: 4% 15% 4% 15%;
    display: inline-block;
    background-color:#97c1c0;
    border-radius: 1em;
    margin: 0;
}
section div h2:nth-last-of-type(1):hover{
    background-color: #04c5c0 ;
}
```
<a name="tjava"></a>
## JAVASCRIPT
<a name="floaded"></a>
### function loaded()
La funcion es una vez cargado el body ve donde se encuentra la id activo y ejecuta una de terminada funcion:
```JavaScript
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
```
<a name="factivar"></a>
### function activar
Son varias funciones dependiendo de la situacion que se de para colorear la imagen pequeña, que  aparezca la imagen grande y texto
```JavaScript
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
```
<a name="fzoom"></a>
### function zoom()
La funcion zoom una vez que se hace clic al aricle mira se esta activo el id zoom y si es nulo pone la id zoom y si ya lo esta la quita:
```JavaScript
function zoom(){
    if (document.getElementById("zoom") == null){
        document.getElementsByTagName("article")[0].setAttribute("id", "zoom");
    }
    else{
        document.getElementsByTagName("article")[0].removeAttribute("id");
    }
}
```
