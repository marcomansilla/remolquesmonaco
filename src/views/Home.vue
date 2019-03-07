<template>
    <div id="inicio" class="container-fluid">
	<div class="shadow">
	    <h1>Remolques Mónaco</h1>

	    <h3 class="d-none d-sm-block">El servicio de remolques más rapido y económico de Buenos Aires y CABA, AR</h3>
	    <a class="btn btn-primary" target="_blank" href="https://wa.me/541157080657">COMUNIQUESE AHORA  <i class="fa fa-whatsapp">  </i> 011 1557080657</a>
	</div>
    </div>
</template>

<style scoped>
 .fa {
     padding:10px
 }

 .btn {
     margin-top:100px;
     font-size:1rem
 }

 h1 {
     /* font-size:4rem;
	font-weight:bold */
     margin-top:25%;
     padding:0px
 }

 h3 {
     font-size:3rem;
     font-style:italic;
     max-width:80%;
     margin:auto
 }

 #inicio {
     text-align:center;
     background-image:url('../assets/images/front2.png');
     min-height:100vh;
     background-size:cover;
     background-color:black;
     padding:0px;
 }

 h1, h3 {
     margin-bottom:80px
 }


 .shadow {
     padding-top:10%;
     min-width:100%;
     height:100vh;
     background-color:rgba(9,24,53,.5);
     color:#fff;
     text-align:center;
 }

 @media screen and (width<1000px){

     .shadow {
	 padding-top:65%
     }
     h1 {
	 font-size:2em;
	 margin-bottom:0px
     }

     .button {
	 margin-top:20%;
	 max-width:100%;
	 font-size:1rem;
     }
 }
</style>
