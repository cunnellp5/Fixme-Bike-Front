<template lang="html">
  <div>
    <ul class="nav nav-pills nav-justified">
      <router-link to='/' tag="li" active-class="active" exact><a>Home</a></router-link>
      <router-link to='/bicyclist/1' tag="li" active-class="active"><a>Bicyclist</a></router-link>
      <!-- <router-link :to="{ name: 'bicyclist', params: { id: 11 }}">bikerbreube</router-link> -->
      <router-link to='/store/2' tag="li" active-class="active"><a>Store</a></router-link>
      <router-link to='/login' tag="li" active-class="active" exact><a>Login</a></router-link>
      <router-link to='/signup' tag="li" active-class="active" exact><a>Sign up</a></router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  id: 11,
  name: 'bicyclist',
  data(){
    return {
      bicyclist: {}
    }
  },
  methods: {
  loadBicyclist: function () {
    axios.get('http://localhost:3000/user').then((response) => {
      console.log(localStorage.id);
      this.bicyclist = response.data["0"]
      this.w = this.bicyclist.id
    }, (err) => {
      console.log(err)
    })
  }
},
mounted: function () {
  this.loadBicyclist()
}

}
</script>

<style>
.nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover {
  background-color: #404040;
}
</style>
