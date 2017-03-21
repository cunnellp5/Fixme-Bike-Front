<template lang="html">
  <div>
    <ul class="nav nav-pills">
      <router-link to='/' tag="li" active-class="active" exact><a>Home</a></router-link>
      <!-- <router-link to='/bicyclist/1' tag="li" active-class="active"><a>Bicyclist</a></router-link> -->
      <!-- <router-link to='/store/2' tag="li" active-class="active"><a>Store</a></router-link> -->
      <router-link to='/login' tag="li" active-class="active" exact><a>Login</a></router-link>
      <router-link to='/signup' tag="li" active-class="active" exact><a>Sign up</a></router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'bicyclist',
  data(){
    return {
      bicyclist: {}
    }
  },
  methods: {
  loadBicyclist: function () {
    axios.get('http://localhost:3000/user').then((response) => {
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
