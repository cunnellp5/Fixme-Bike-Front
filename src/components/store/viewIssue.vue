<template lang="html">
  <div>
    <h3>view pending issues</h3>
    <button class="btn btn-primary" @click="fetchData">grab data</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>HELP:</h4>
          </div>
          <div class="panel-body">
            <ul class="list-group" v-for="i in issues">
              <button @click="del" class="btn btn-danger pull-right" type="button" name="button"> Delete Request </button>
              <h5> {{ i.firstName }}</h5>
              <p>#{{ i.phone }}</p>
              <li class="list-group-item"><p>Got cash</p> - {{ i.cash }} </li>
              <li class="list-group-item"><p>Biketube size</p> - {{ i.biketube }} </li>
              <li class="list-group-item"><p>Broken bikechain</p> - {{ i.bikechain }} </li>
              <li class="list-group-item"><p>Location</p> - {{ i.location }} </li>
              <li class="list-group-item"><p>Msg</p> - {{ i.message }} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        issueData: {
          location: '',
          biketube: '',
          isActive: '',
          cash: '',
          bikechain: ''
        },
        issues: [],
        bike: []
      };
    },
    methods: {
      fetchData(){
        this.$http.get('http://localhost:3000/issues')
          .then(response => {
            return response.json();
          })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key])
            }
            this.issues = resultArray
            console.log(this.issues["0"].issuer);
          });
      },
      del() {
        this.$http.delete('http://localhost:3000/issues/' + this.issues["0"].issuer)
          .then(response => {
            return response.json();
          })
          .then(data => console.log(data));
      }
    }
  }
</script>
