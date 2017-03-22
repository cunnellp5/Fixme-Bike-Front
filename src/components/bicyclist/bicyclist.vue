<template lang="html">
  <div>
    <div class="text-center">

    <h2>Bicyclist page </h2>
    <hr>
    <img id="bikeimg" src="https://s-media-cache-ak0.pinimg.com/originals/d1/00/13/d10013ab5dbdb1b2954201bf41c81ad0.jpg" alt="bicycle">
    <br>
    <br>
          <!-- <img id="profilepic" v-bind:src="w" alt="Image"> -->
    <!-- <p>{{this.bicyclist}}</p>
    <p>{{bicyclist}}</p> -->
    <!-- <p>Loaded ID: {{ id }}</p> -->
    <!-- <button @click="navigateToHome" class="btn btn-xs btn-primary">Home</button> -->
    <!-- <button @click="helpRequest" class="btn btn-danger">Help</button> -->

    <router-link
      tag="button"
      :to="{ name: 'issue'}"
      class="btn btn-md btn-success">help form</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  // export default {
  //   data() {
  //     return {
  //       id: localStorage.id,
  //       bicyclist: {
  //         image: '',
  //         firstName: ''
  //       },
  //       bicyclists: []
  //     };
  //   },
  //   methods: {
  //     fetchUser(){
  //       this.$http.get(`http://localhost:3000/user/bicyclist/${localStorage.id}`)
  //         .then(response => {
  //           return response.json();
  //         })
  //         .then(data => {
  //           console.log(data.firstName);
  //           const resultArray = [];
  //           for (let key in data) {
  //             resultArray.push(data[key])
  //           }
  //           this.bicyclists = resultArray
  //         });
  //     }
  //   }
  // }
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
          this.bicyclist = response.data["0"]
          // this.w = this.bicyclist.image

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
#bikeimg {
  width: 80%;
  border-radius: 50%;
}
</style>
