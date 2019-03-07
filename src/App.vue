<template>
    <div>
	<NavbarComponent></NavbarComponent>
	<home></home>
	<servicios></servicios>
	<contacto></contacto>
    </div>
</template>

<script>
 import NavbarComponent from './components/NavbarComponent.vue'
 import Home from './views/Home.vue'
 import Servicios from './views/Services.vue'
 import Contacto from './views/Contact.vue'
 export default {
     name: 'app',
     components: {
	 NavbarComponent,
	 Home,
	 Servicios,
	 Contacto
     }
 }
</script>

<style>
</style>
