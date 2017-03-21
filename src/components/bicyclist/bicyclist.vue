<template lang="html">
  <div>
    <h2>Bicyclist page </h2>
    <hr>
    <p>Loaded ID: {{ id }}</p>
    <!-- <button @click="navigateToHome" class="btn btn-xs btn-primary">Home</button> -->
    <!-- <button @click="helpRequest" class="btn btn-danger">Help</button> -->

    <router-link
      tag="button"
      :to="{ name: 'issue'}"
      class="btn btn-xs btn-success">Make a help form</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: localStorage.id
      }
    },
    methods: {
      // navigateToHome() {
      //   this.$router.push({ name: 'home'});
      // }
    }
  }

</script>
