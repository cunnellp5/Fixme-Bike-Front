<template lang="html">
  <div>
    <h2>Store page</h2>
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
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      navigateToHome() {
        this.$router.push({ name: 'home' });
      }
    }
  }
</script>
<style>
  #stores {
    height: 100%;
    width: 100%;
  }
</style>
