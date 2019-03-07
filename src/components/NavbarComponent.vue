<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a class="navbar-brand" href="#"><img alt="" class="img-responsive" src="../assets/logo.png"/></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	</button>

	<div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
		<li class="nav-item"><a class="nav-link" href="#inicio">Inicio<span class="sr-only">(current)</span></a></li>
		<li class="nav-item"><a class="nav-link" href="#servicios">Servicios</a></li>
		<li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
	    </ul>
	</div>
    </nav>
</template>
<script>
 export default {
     name:'NavbarComponent',
     data(){
	 return{
	     displayMenu:false
	 }
     },
     methods:{
	 toggleMenu(){
	     this.displayMenu=!this.displayMenu
	 }
     }
 }
</script>

<style scoped>

 .navbar-toggler-icon {
     background-color:#0db5f7
 }

 nav {
     background-color:#091835 !important;
     position:fixed;
     top:0;
     width:100%;
     margin-bottom:180px;
 }

 .navbar-brand img {
     height:6rem;

 }

 .nav-link{
     color:#fff !important;
 }

 .nav-link:hover {
     color:#091835 !important;
     background-color:#fff
 }

 @media (width>1100px){
     .navbar-end {
	 margin-right:5rem
     }
 }

 @media (width<1100px){
     .navbar-menu {
	 background-color:#091835
     }

     .navbar-burger {
	 color:#fff
     }
 }
</style>
