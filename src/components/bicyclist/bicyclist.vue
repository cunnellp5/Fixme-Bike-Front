<template lang="html">
  <div>
    <div>
    </div>
    <h2 v-bind="bicyclist">{{ bicyclist.firstName }} {{ bicyclist.lastName }}</h2>
    <div class="text-center">
    <hr>
    <!-- <img id="bikeimg" src="https://s-media-cache-ak0.pinimg.com/originals/d1/00/13/d10013ab5dbdb1b2954201bf41c81ad0.jpg" alt="bicycle"> -->
    <!-- <img id="bikeimg" src="http://www.vehiclehi.com/thumbnails/detail/20121027/bicycles%20xray%201920x1200%20wallpaper_www.vehiclehi.com_61.jpg" alt=""> -->
    <img id="bikeimg" src="https://images7.alphacoders.com/345/thumb-1920-345366.jpg" alt="Bicycle image">
    <br>
    <br>
      <router-link
        tag="button"
        :to="{ name: 'issue'}"
        class="btn btn-md btn-success nav nav-pills nav-justified">Help form
      </router-link>
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
        axios.get(`https://fixmebike.herokuapp.com/user/bicyclist/${this.$route.params.id}`).then((response) => {
          this.bicyclist = response.data
          console.log(this.bicyclist.isActive);
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
  width: 100%;
}
</style>
