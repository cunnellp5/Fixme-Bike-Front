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
                   v-model.lazy="login.email">
          </div>
          <div class="form-group">
            <label for="location">Password</label>
            <input type="text"
                   id="location"
                   class="form-control"
                   v-model.lazy="login.password">
          </div>

        </div>
      </div>
      <button
          class="btn btn-primary"
          @click.prevent="submitted">
          Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data: function () {
    return {
      login: []
    }
  },
  methods: {
    login: function () {
      axios.post('/login', { firstName: '', email: '' })
      .then((response) => {
        console.log("logged in");
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
