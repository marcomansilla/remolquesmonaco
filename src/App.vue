<template>
    <div>
	<NavbarComponent></NavbarComponent>
	<home></home>
	<servicios></servicios>
    </div>
</template>

<script>
 import NavbarComponent from './components/NavbarComponent.vue'
 import Home from './views/Home.vue'
 import Servicios from './views/Services.vue'
 export default {
     name: 'app',
     components: {
	 NavbarComponent,
	 Home,
	 Servicios
     }
 }
</script>

<style>
</style>
