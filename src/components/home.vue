<template lang="html">
  <div>
    <div>
      <ul class="nav nav-pills nav-justified">
        <!-- <router-link to='/bicyclist/1' tag="li" active-class="active"><a>Bicyclist</a></router-link> -->
        <!-- <router-link :to="{ name: 'bicyclist', params: { id: 11 }}">bikerbreube</router-link> -->
        <!-- <router-link to='/store/2' tag="li" active-class="active"><a>Store</a></router-link> -->
        <router-link to='/' tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to='/login' tag="li" active-class="active" exact><a>Login</a></router-link>
        <router-link to='/signup' tag="li" active-class="active" exact><a>Sign up</a></router-link>
      </ul>
    </div>
    <h2>Home page</h2>
    <hr>
    <img id="homeimg" src="http://radpropaganda.org/wp-content/uploads/2009/10/broken-bike-trash-bowery-nyc2008-radpropaganda.jpg" alt="">
    <hr>
    <div class="row">
      <div class="col-xs-6">
        <h4>Bicyclists</h4>
        <ul>
          <li>when your bike breaks</li>
          <li>send out a help request!</li>
        </ul>
      </div>
      <div class="col-xs-6">
        <h4>Stores</h4>
        <ul>
          <li>View requests from bicyclists.</li>
          <li>Rescue them and earn money.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style media="screen">
  #homeimg {
    height: 100%;
    width: 100%;
  }
</style>
