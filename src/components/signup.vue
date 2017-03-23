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
          <h2>Sign up!</h2>
          <hr>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email"
                   id="email"
                   class="form-control"
                   placeholder="john@doe.com"
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
                   placeholder="John"
                   v-model.lazy="signUp.firstName">
          </div>
          <div class="form-group">
            <label for="lastName">Last name</label>
            <input type="text"
                   id="lastName"
                   class="form-control"
                   placeholder="Doe"
                   v-model.lazy="signUp.lastName">
          </div>
          <div class="form-group">
            <label for="phone">Phone #</label>
            <input type="phone"
                   id="phone"
                   class="form-control"
                   placeholder="xxx-xxx-xxxx"
                   v-model.lazy="signUp.phone">
          </div>
          <!-- <div class="form-group">
            <label for="image">image</label>
            <input type="text"
                   id="imgage"
                   class="form-control"
                   placeholder="optional"
                   v-model="signUp.image">
          </div> -->
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
          class="btn btn-success btn-lg"
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
        type: '',
        image: ''
      },
      isSubmitted: false
    }
  },
  methods: {
    signedUp() {
        this.isSubmitted = true
        this.$http.post('https://fixmebike.herokuapp.com/auth/signup', this.signUp)
        .then(response => {
          console.log(this.signUp);
          // localStorage.setItem('id', result.data.message)
          // console.log(response.data.id);
          // console.log(this.signUp.type);
          var store = this.signUp.type
          if (store == 2) {
            this.$router.replace({ name: 'store', params: { id: response.data.id }})
          } else if (store == 1) {
            this.$router.replace({ name: 'bicyclist', params: { id: response.data.id }})
          }
          console.log(response);

        }, error => {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="css">
  .radio {
    display: inline;
    margin-left: 1em;
  }
</style>
