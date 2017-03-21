<template lang="html">
  <div class="col-xs-12 col-sm-12 col-md-12">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <h2>Sign up!</h2>
          <hr>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email"
                   id="email"
                   class="form-control"
                   v-model.lazy="signUp.email">
          </div>
          <div class="form-group">
            <label for="password">password</label>
            <input type="password"
                   id="password"
                   class="form-control"
                   v-model.lazy="signUp.password">
          </div>
          <div class="form-group">
            <label for="firstName">First name</label>
            <input type="text"
                   id="firstName"
                   class="form-control"
                   v-model.lazy="signUp.firstName">
          </div>
          <div class="form-group">
            <label for="lastName">Last name</label>
            <input type="text"
                   id="lastName"
                   class="form-control"
                   v-model.lazy="signUp.lastName">
          </div>
          <div class="form-group">
            <label for="phone">Phone #</label>
            <input type="phone"
                   id="phone"
                   class="form-control"
                   v-model.lazy="signUp.phone">
          </div>
          <div class="form-group">
            <label for="type">Who are you?</label>
            <div class="radio">
              <label><input v-model.lazy="signUp.type" type="radio" name="optradio" value="1">Bicyclist</label>
            </div>
            <div class="radio">
              <label><input v-model.lazy="signUp.type" type="radio" name="optradio" value="2">Store</label>
            </div>
          </div>

        </div>
      </div>
      <button
          class="btn btn-success"
          @click.prevent="signedUp">
          Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signUp: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        type: ''
      },
      isSubmitted: false
    }
  },
  methods: {
    signedUp() {
      console.log("hi");
      console.log(this.signUp);
        this.isSubmitted = true
        this.$http.post('http://localhost:3000/user', this.signUp)
        .then(response => {
          console.log(this.signUp);
          console.log(response);
        }, error => {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="css">
</style>
