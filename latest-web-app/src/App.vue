<template>
   <div>
      <!-- <div class="loading">
         <div class="text-center middle">
             <span class="loader">
         <span class="loader-inner"></span>
             </span>
         </div>
         </div> -->
      <Header/>
      <router-view default="{name: 'contact'}"></router-view>
      <Client/>
      <Footer/>
   </div>
</template>
<script>
   import Header from './components/Header'
   import Client from './components/Client'
   import Footer from './components/Footer'
   //import Home from './components/pages/Home'
   
   export default {
     name: 'App',
     components: {
       //Home,
       Header,
       Footer,
       Client
     }
   }
</script>