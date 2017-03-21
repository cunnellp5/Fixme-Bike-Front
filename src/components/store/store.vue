<template lang="html">
  <div>
    <h2>Store page</h2>
    <hr>
    <p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-xs btn-primary">Home</button>
    <!-- <button @click="viewIssues" class="btn btn-warning">View Issues</button> -->
    <router-link
      tag="button"
      :to="{ name: 'viewissue', params: { id: $route.params.id }}"
      class="btn btn-xs btn-warning">View helps</router-link>
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
