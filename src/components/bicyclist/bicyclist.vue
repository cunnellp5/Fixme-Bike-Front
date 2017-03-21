<template lang="html">
  <div>
    <h2>Bicyclist page </h2>
    <hr>
    <p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-xs btn-primary">Home</button>
    <!-- <button @click="helpRequest" class="btn btn-danger">Help</button> -->
    <router-link
      tag="button"
      :to="{ name: 'issue'}"
      class="btn btn-xs btn-danger">Send for help</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      navigateToHome() {
        this.$router.push({ name: 'home'});
      }
    }
  }

</script>
