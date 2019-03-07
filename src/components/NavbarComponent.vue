<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
	    <a class="navbar-item" href="#inicio">
		<img alt="" src="../assets/logo.png"/>
	    </a>
	    <a role="button"
	       class="navbar-burger burger"
	       aria-label="menu" aria-expanded="false"
	       @click="toggleMenu()"
	       data-target="navbarRemolquesMonaco">
		<span aria-hidden="true"></span>
		<span aria-hidden="true"></span>
		<span aria-hidden="true"></span>
	    </a>
	</div>
	<div id="navbarRemolquesMonaco" :class="['navbar-menu', displayMenu?'is-active':'']">
	    <div class="navbar-end">
		<a class="navbar-item" @click="toggleMenu()" href="#inicio">Inicio</a>
		<a class="navbar-item" @click="toggleMenu()" href="#servicios">Servicios</a>
		<a class="navbar-item" @click="toggleMenu()"   href="#contacto">Contacto</a>
	    </div>
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
 nav {
     background-color:#091835;
     position:fixed;
     top:0;
     width:100%;
     margin-bottom:180px;
 }

 .navbar-item img {
     min-height:100px !important;

 }

 .navbar-item {
     color:#fff
 }

 .navbar-item:hover {
     color:#091835
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
