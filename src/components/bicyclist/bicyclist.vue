<template lang="html">
  <div>
    <h2 v-bind="bicyclist">{{ bicyclist.firstName }} {{ bicyclist.lastName }}</h2>
    <div class="text-center">

    <!-- <h6>{{ bicyclist.phone }}</h6> -->
    <hr>
    <img id="bikeimg" src="https://s-media-cache-ak0.pinimg.com/originals/d1/00/13/d10013ab5dbdb1b2954201bf41c81ad0.jpg" alt="bicycle">
    <br>
    <br>
    <router-link
      tag="button"
      :to="{ name: 'issue'}"
      class="btn btn-md btn-success">help form</router-link>
    </div>
    <router-view v-if="canView"></router-view>
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
        axios.get(`http://localhost:3000/user/bicyclist/${this.$route.params.id}`).then((response) => {
          this.bicyclist = response.data
          console.log(response.data);
          // this.w = this.bicyclist.image
        }, (err) => {
          console.log(err)
        })
      },
      canView(){
        console.log("toggle me");
      }
    },
    mounted: function () {
      this.loadBicyclist()
    }
  }
</script>

<style>
#bikeimg {
  width: 80%;
}
</style>
