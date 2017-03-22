<template lang="html">
  <div>
    <div>
      <form v-if="isSubmitted">
        <hr>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <h3>File a help request</h3>
            <hr>
            <div class="form-group">
              <label for="location">Location</label>
              <input type="text"
                     id="location"
                     class="form-control"
                     placeholder="Cross Streets will do"
                     v-model.lazy="issueData.location">
            </div>
            <div class="form-group">
              <label for="biketube">Bike Tube Size</label>
              <input type="text"
                     id="bikeTube"
                     class="form-control"
                     placeholder="28 x 38"
                     v-model.lazy="issueData.biketube">
            </div>
            <div class="form-group">
              <label class="checkbox" for="cash">Got Cash?</label>
                <div>
                  <input
                        type="checkbox"
                        v-model="issueData.cash">Yes
                </div>
            </div>
            <div class="form-group">
              <label class="checkbox" for="bikechain">Broke Chain?</label>
                <div>
                  <input
                        type="checkbox"
                        v-model="issueData.bikechain">Yes
                </div>
            </div>
          </div>
        </div>
        <button
            class="btn btn-danger"
            @click.prevent="submitted">
            HELP!
        </button>
      </form>
        <div v-else>
          <h1 class="text-center">Pending request...</h1>
          <div class="loader">
          </div>
        </div>
      <hr>
    </div>
  </div>
</template>

<script>
import viewIssue from '../store/viewIssue.vue'
  export default {
    data() {
      return {
        issueData: {
          issuer: '',
          location: '',
          biketube: '',
          isActive: '',
          cash: false,
          bikechain: false
        },
        isSubmitted: true
      }
    },
    methods: {
      submitted() {
        this.issueData.issuer = this.$route.params.id
        this.isSubmitted = false
        this.issueData.isActive = true
        if (this.issueData.biketube != '' && this.issueData.isActive != '' && this.issueData.location != '') {
          this.$http.post('http://localhost:3000/issues', this.issueData)
          .then(response => {
            console.log(this.issueData.location);
            console.log(response);
          }, error => {
            console.log(error);
          });
        }
      }
    }
  }
</script>

<style>
.loader {
    margin: 0 auto;
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 2s linear infinite;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
