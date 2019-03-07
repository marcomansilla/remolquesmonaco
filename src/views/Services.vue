<template>
    <div id="servicios">
	<div class="columns is-mobile">
	    <div class="column is-8">
		<h1>Necesitas una grua?</h1>
		<small>Claro que si!.</small>
		<p>Por eso estas aqui. Pero por que tan abajo en primer lugar?.</p>
		<p>No vio nuestro numero de telefono en el boton de la pantalla superior?.</p>
		<p>Puede que estes cuestionando nuestra calidad de servicio.</p>
		<p>Sus amigos y vecinos lo guiaron en la direccion equivocada, o realmente ofrecemos el mejor servicio de gruas en Bs. As. y C.A.B.A. que viste?</p>
	    </div>
	    <div class="column is-4 xs-hidden">
		<img alt="" src="../assets/images/ram.jpeg"/>
	    </div>
	</div>
	<hr/>
	<div class="columns is-mobile xs-hidden">
	    <div class="column long-text is-12">
		<p>Muy bien, parece que realmente quieres saber si somos el servicio adecuado de remolques para vos.</p>
		<p>Lo somos. Aqui esta el porqué:</p>​
		<p>Nos importas vos, el cliente, y siempre haremos bien nuestro trabajo.</p>
		<p>Somos bastante rapidos en hacerlo, y no te vamos a cobrar un brazo y una pierna.</p>
		<p>Tambien demuestra que entendemos tu situacion, y la obligacion moral de hacer un buen trabajo</p>
		<p>Amamos nuestro trabajo, por que nos da la oportunidad de servir a otros con nuestras habilidades y conocimiento para asistencia en las rutas.</p>
		<p>Con nuestros camiones con plancha, proveemos servicios de grua rapidos y accesibles con servicios inigualables en nuestras zonas. Sabemos como hacerte llegar del punto A al punto B rapidamente y sin dañar tu vehiculo.</p>
		<p>Llamanos hoy mismo para comprobar la calidad de nuestro servicio. No te vamos a decepcionar!!!.</p>
		<p>Entonces, que nos hace diferentes de otros servicios de remolques?. Experiencia, profesionalismo, y el deseo de satisfacer (si, realmente nos intesa tu situacion). Sabemos lo frustrante que es quedarte al costado de la ruta e infortunadamente es algo que por que todos nosotros pasamos en algun momento de nuestras vidas ocupadas.</p>
		<p>Cuando pasa, quieres un equipo de conductores de remolques con experiencia para solucionar tu emergencia en la ruta. Nuestros años de servicio en las rutas de todo Bs. As. nos han enseñada encontables lecciones sobre como ayudar y tratar a las personas debidamente.</p>
		<p>Tambien necesitas un servicio de remolques que haya invertido en una flota confiable de camiones y equipo de primera, sabiendo que tu vehiculo esta en buenas manos. Usamos las mejores herramientas de la industria de remolques para asegurar un trabajo bien hecho, que agendaras nuestro número en tu teléfono y les contarás a tus amigos de nuestro servicio.</p>
		<p>Lo mas importante, realmente nos importas como persona. Si necesitas un remolque, lo mas probable es que no estes feliz de eso. Pemos hacemos un esfuerzo extra para que un mal dia no se ponga peor. Trato cordial y acercamiento amistoso son las cosas que vas a recibir cuando necesites nuestro servicio.</p>
		<p>Desde donde estes puedes contar con nuestros siguientes servicios.</p>​
		<ul>
		    <li>Traslado de vehiculo</li>
		    <li>Asistencia en la ruta</li>
		    <li>Puente de bateria</li>
		    <li>Cambio de ruedas pinchadas</li>
		</ul>
	    </div>
	</div>
    </div>
</template>

<script>
 export default {
     data(){
	 return {
	 }
     }
 }
</script>

<style scoped>
 #servicios {
     padding-top:1.5rem !important;
     height:100vh;
     padding:120px
 }

 h1 {
     font-weight:bold;
     font-size:30px
 }

 small {
     font-size:20px;
     font-style:italic;
     color:#c0c0c0
 }

 .long-text {
     text-align:justify;
 }

 p {
     line-height:3rem
 }

 img {
     max-width:80%;
 }

 .center {
     text-align:center;
     padding: 0 200px !important;
 }

 @media screen and (width<1000px){
     .long-text {
	 padding:0px
     }

     #servicios {
	 padding:40% 0px 0px 0px;
     }

     .xs-hidden {
	 display:none !important;
     }

     .is-8 {
	 text-align:center;
	 margin:auto
     }
 }

</style>
