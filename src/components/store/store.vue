<template lang="html">
  <div>
    <h2 v-bind="store">{{ store.firstName }}</h2>
    <hr>
    <img id="stores" src="http://cdn.trendhunterstatic.com/thumbs/pave-bicycle-store.jpeg" alt="store">
    <br>
    <br>
    <!-- <button @click="viewIssues" class="btn btn-warning">View Issues</button> -->
    <router-link
      tag="button"
      :to="{ name: 'viewissue', params: { id: $route.params.id }}"
      class="btn btn-md btn-warning">View helps</router-link>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'store',
    data() {
      return {
        id: this.$route.params.id,
        store: {}
      }
    },
    methods: {
      navigateToHome() {
        this.$router.push({ name: 'home' });
      },
      loadStores: function(){
        axios.get(`http://localhost:3000/user/store/${this.$route.params.id}`).then((response) => {
          this.store = response.data["0"]
          console.log(response.data["0"].firstName);
        }, (err) => {
          console.log(err);
        })
      }
    },
    mounted: function () {
      this.loadStores()
    }
  }
</script>
<style>
  #stores {
    height: 100%;
    width: 100%;
  }
</style>
