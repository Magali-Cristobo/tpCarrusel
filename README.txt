Instrucciones para utilizar el carrusel:
1- Una vez se tenga todo el repositorio en la carpeta del proyecto, debe poner en el head del HTML lo siguiente:
        <script src="jquery-3.4.1.min.js"></script>
        <link type="text/css" rel="stylesheet" href="carrusel.css">
        <script src="carrusel.js"></script> 
Importante: si le cambia los nombres a los archivos relacionados con el carrusel, asegurece de tambien hacerlo aca.

2- Ingrese un div en el codigo y pongale un id a eleccion, este sera el carrusel.

3- Mediante img, ponga las imagenes que quiera que se muestren en el carrusel.

4- Por ultimo ingrese, donde quiera, el siguiente script:
        <script> 
            activarMiCarousel(dato1,dato2);
        </script>
Donde dato1 es el id del div que sera el carrusel (ingresar entre comillas; el: "carrusel") y dato2 es el tiempo que desea que las
imagenes esten en pantalla (se escribe en milisegundos; ej: 3 segundos = 3000).
