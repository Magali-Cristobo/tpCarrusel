var porcentajeBarraProgreso=0;
var porcentajeBarraImagenActual=0;
var imagenActual = 1;  
var loop;
var barraProgresoLoop;
var cantImagenesTotales;
var segundos;
function actualizarValores() {
    if(imagenActual > cantImagenesTotales){
        imagenActual = 1;
    }
    else if(imagenActual < 1){
        imagenActual = cantImagenesTotales;
    }
    porcentajeBarraProgreso=0;
    loop=setInterval(imagenSiguiente,segundos);
    barraProgresoLoop=setInterval(incrementarBarraProgreso,segundos/100);
    incrementarBarraImagenActual();
}
function imagenSiguiente(){
    $("#imagen"+(imagenActual-1)).css("display","none");//ponemos -1 porque los ids de las imagenes arrancan en 0.
    clearInterval(barraProgresoLoop);
    clearInterval(loop);
    imagenActual++;
    actualizarValores();
    $("#imagen"+(imagenActual-1)).fadeIn("slow");
}
function imagenAnterior(){
    $("#imagen"+(imagenActual-1)).fadeOut("fast",function () {
            $("#imagen"+(imagenActual-1)).css("display","block");
    }); 
    clearInterval(barraProgresoLoop);
    clearInterval(loop);
    imagenActual--;
    actualizarValores();
}
function incrementarBarraImagenActual(){
    porcentajeBarraImagenActual=(imagenActual/cantImagenesTotales)*100;
    $('.progress-bar2').css('width', porcentajeBarraImagenActual+'%'); 
}
function incrementarBarraProgreso(){
    porcentajeBarraProgreso+=1;
    $('.progress-bar').css('width', porcentajeBarraProgreso+'%');
    if (porcentajeBarraProgreso == 100) {
        clearInterval(barraProgresoLoop);
    }  
}
function asignarIdsYClases(nombreCarrusel){
    $("#"+nombreCarrusel).children("img").addClass("imagen");
    cantImagenesTotales=$(".imagen").length;
    $("#"+nombreCarrusel).children("img").attr( "id", function( cantImagenesTotales ) {
        return "imagen" + cantImagenesTotales;//pudimos hacer que le ponga un id a las imagenes, pero arranca en 0.
    });
}
function agregarBotonesYBarras(nombreCarrusel){
    $("#"+nombreCarrusel).append('<button id="atras" class="boton"><</button><button id="adelante" class="boton">></button>');
    $("#"+nombreCarrusel).append('<div id="imagenActual"><div class="progress2"><div class="progress-bar2" role="progressbar" style="width: 0%" >1</div></div></div>');
    $("#"+nombreCarrusel).append('<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" >0%</div></div>');
}
function agregarEstilosAlDiv(nombreCarrusel){
    $("#"+nombreCarrusel).css("margin-right","20%");
    $("#"+nombreCarrusel).css("margin-left","20%");
    $("#"+nombreCarrusel).css("width","auto");
    $("#"+nombreCarrusel).css("height","auto");
    $("#"+nombreCarrusel).css("position","relative");
    $("#"+nombreCarrusel).css("margin-bottom","10px");
}
function activarMiCarousel(nombreCarrusel,segundosParametro){//agregar lo de los segundos
    asignarIdsYClases(nombreCarrusel);
    agregarBotonesYBarras(nombreCarrusel);
    agregarEstilosAlDiv(nombreCarrusel);
    segundos=segundosParametro;
    loop=setInterval(imagenSiguiente,segundos);
    barraProgresoLoop=setInterval(incrementarBarraProgreso,segundos/100); 
    incrementarBarraImagenActual();
}
$(document).on('click','#adelante',imagenSiguiente);//el .click() no funciona para elementos dinamicos
$(document).on('click','#atras',imagenAnterior);