<template lang="html">
  <div>
    <div>
      <form>
        <hr>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <h3>File a help request</h3>
            <hr>
            <div class="form-group">
              <label for="location">Location (cross st.)</label>
              <input type="text"
                     id="location"
                     class="form-control"
                     v-model.lazy="issueData.location">
            </div>
            <div class="form-group">
              <label for="biketube">Bike Tube Size</label>
              <input type="text"
                     id="bikeTube"
                     class="form-control"
                     v-model.lazy="issueData.biketube">
            </div>
            <div class="form-group">
              <label for="cash">Got Cash?</label>
              <br>
              <div>
                  <input
                        type="checkbox"
                        v-model="issueData.cash">Yes
                </div>
            </div>
            <div class="form-group">
              <label for="bikechain">Broke Chain?</label>
              <br>
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
      <hr>
      <!-- <div class="row" v-if="isSubmitted">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4>Help Me!</h4>
            </div>
            <div class="panel-body">
              <p>Phone: {{ issueData.location }}</p>
              <p>Biketube size: {{ issueData.biketube }}</p>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
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
        isSubmitted: false
      }
    },
    methods: {
      submitted() {
        this.issueData.issuer = this.$route.params.id
        this.isSubmitted = true
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
