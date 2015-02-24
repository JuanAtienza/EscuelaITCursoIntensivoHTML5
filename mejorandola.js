// GEOLOCALIZACIÓN (Mejorando.la ---> Introducción a la Geolocalización HTML5)
// nota - Para probar este ejemplo hay que subirlo antes a un Servidor....
// ojo - En Explorer, la geolocalización funciona desde IE-9 hacia arriba...
var lat, lon, velocidad, vector;

$(document).on("ready", inicio);  // se llama, cuando la página termina de cargar...

function inicio(){
	geolocalizar(); // no es buena práctica poner el código aquí, modularizamos...
}

function geolocalizar(){
	navigator.geolocation.getCurrentPosition(mostrar, correrEnCirculos);
	/* 
	 * navigator, es el objeto que controla a todo lo que está en el navegador
	 * parámetros:
	 * - mostrar: función que se dispara cuando el programa funciona (la geolocalización funciona)
	 * - correrEnCirculos: función que se dispara cuando todo se va al c....	
	 * Ojo- El usuario tiene que dar permiso para la localización, si no dá permiso, se disparará
	 * la función 'correrEnCirculos'
	 */
}

function correrEnCirulos(errorsh){
	alert("Tarde o temprano te encontraré ¬_¬");
	console.log(errorsh);  // es igual a console.debug()
	                       // error que se mostrará al 'desarrollador', no al usuario...
}

function mostrar(geo){ // geo es una simple variable donde están las coordenadas...
	                   // Por cierto, dentro de geo, no sólo está longitud y latitud, también está
	                   // altitud y vector de movimiento, velocidad, aceleración, y grados hacia donde
	                   // me estoy moviendo...(en la logitud y latitud hay un posible error de 100, 500 metros)
	                   // (wifi 100 m de presición
	                   //  ip "presición de ciudad"
	                   //  Triangulación GSM "presición de 500 m")
	lat       = geo.coords.latitude;
	lon       = geo.coords.longitude;
	velocidad = geo.coords.speed;
	vector    = geo.coords.heading; // vector de movimiento
	                                // heading, es basicamente una brújula...
}