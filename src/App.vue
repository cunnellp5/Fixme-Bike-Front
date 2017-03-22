<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center top">Fixme-bike</h1>
        <!-- <hr> -->
        <app-header></app-header>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import header from './components/header.vue';
  export default {
    components: {
      appHeader: header
    }
  }
</script>

<style>
 .top {
   border-bottom: 5px solid black;
   font-size: 5em;
 }
  h1, h2, h3, h4 {
    font-family: 'Permanent Marker', cursive;
  }
  .slide-leave-active {
    transition: opacity 0.5s ease;
    opacity: 0;
    animation: slide-out 0.5s ease-out forwards;
  }
  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }
  .slide-enter-active {
    animation: slide-in 0.5s ease-out forwards;
  }
  @@keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }
  @@keyframes slide-in {
    0%  {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
