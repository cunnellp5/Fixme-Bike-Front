<template lang="html">
  <div class="col-xs-12 col-sm-12 col-md-12">
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
            <input type="text"
                   id="location"
                   class="form-control"
                   required
                   v-model.lazy="loginData.password">
          </div>

        </div>
      </div>
      <button
          class="btn btn-primary"
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
        this.$http.post('http://localhost:3000/auth/login', this.loginData)
        .then(result => {
          localStorage.setItem('id', result.data.message)
          console.log(localStorage);
          // this.$cookie.set(this.loginData.email, result.data.message, 1)
          this.$router.replace({ name: 'bicyclist', params: { id: localStorage.id }})
          console.log(result.data.message);
        }, error => {
          console.log(error);
        });

      }
    }
  }
</script>

<style lang="css">

</style>
