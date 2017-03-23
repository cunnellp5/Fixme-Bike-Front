<template lang="html">
  <div class="col-xs-12 col-sm-12 col-md-12">
    <ul class="nav nav-pills nav-justified">
      <!-- <router-link to='/bicyclist/1' tag="li" active-class="active"><a>Bicyclist</a></router-link> -->
      <!-- <router-link :to="{ name: 'bicyclist', params: { id: 11 }}">bikerbreube</router-link> -->
      <!-- <router-link to='/store/2' tag="li" active-class="active"><a>Store</a></router-link> -->
      <router-link to='/' tag="li" active-class="active" exact><a>Home</a></router-link>
      <router-link to='/login' tag="li" active-class="active" exact><a>Login</a></router-link>
      <router-link to='/signup' tag="li" active-class="active" exact><a>Sign up</a></router-link>
    </ul>
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <h2>Login</h2>
          <hr>
          <div class="form-group">
            <label for="biketube">Email</label>
            <input type="text"
                   id="bikeTube"
                   class="form-control"
                   required
                   v-model.lazy="loginData.email">
          </div>
          <div class="form-group">
            <label for="location">Password</label>
            <input type="password"
                   id="location"
                   class="form-control"
                   required
                   v-model.lazy="loginData.password">
          </div>
        </div>
      </div>
      <button
          class="btn btn-success btn-lg"
          @click.prevent="logMeIn">
          Login
      </button>
    </form>
  </div>
</template>

<script>
import VueRouter from '../main'
export default {

  data() {
    return {
      loginData: {
        email: '',
        password: ''
      },
      isLogged: false
    }
  },
  methods: {
    logMeIn() {
        this.isLogged = true
        this.$http.post('http://localhost:3000/token', this.loginData)
        .then(result => {
          localStorage.setItem('id', result.data.token)
          console.log(result.data);
          // localStorage.token = result.data.token;
          const payload = localStorage.getItem('id').split('.')[1].replace('-', '+').replace('_', '/');
          const user = JSON.parse(atob(payload))
          console.log(user.user);
          if (user.user.type === 1) {
            this.$router.replace({ name: 'bicyclist', params: { id: user.user.id }})
          } else if (user.user.type === 2) {
              this.$router.replace({ name: 'store', params: { id: user.user.id }})
          }

          /// uncomment this for REDIRECTS ********
          // if (result.data.type == 1) {
          //   this.$router.replace({ name: 'bicyclist', params: { id: localStorage.id }})
          // } else {
          //   this.$router.replace({ name: 'store', params: { id: localStorage.id }})
          // }
          // console.log(localStorage);
          // this.$cookie.set(this.loginData.email, result.data.token, 1)
        }, error => {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="css">
</style>
