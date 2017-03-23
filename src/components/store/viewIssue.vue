<template lang="html">
  <div>
    <h3>view pending issues</h3>
    <button class="btn btn-primary" @click="fetchData">Refresh data</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Available helps</h3>
          </div>
          <div class="panel-body">
            <ul class="list-group" v-for="i in issues">
              <button @click="del" class="btn btn-danger pull-right" type="button" name="button"> Delete Request </button>
              <button @click="enRoute" class="btn btn-info pull-right" type="button" name="button"> Persue </button>
              <h3> {{ i.firstName }}</h3>
              <p class="digits"># {{ i.phone }}</p>
              <li class="list-group-item"><p class="underline">Got cash</p> - {{ i.cash }} </li>
              <li class="list-group-item"><p class="underline">Biketube size</p> - {{ i.biketube }} </li>
              <li class="list-group-item"><p class="underline">Broken bikechain</p> - {{ i.bikechain }} </li>
              <li class="list-group-item"><p class="underline">Location</p> - {{ i.location }} </li>
              <!-- <li class="list-group-item"><p>Msg</p> - {{ i.message }} </li> -->
              <hr>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import makeIssue from '../bicyclist/makeIssue.vue'
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
        this.$http.get('https://fixmebike.herokuapp.com/issues/all')
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
        this.$http.delete('https://fixmebike.herokuapp.com/issues/' + this.issues["0"].issuer)
          .then(response => {
            return response.json();
          })
          .then(data => console.log(data));
      },
      enRoute(){
        console.log("VIEW MEEEEEE");
      }
    },
    mounted: function () {
      this.fetchData()
    }
  }
</script>

<style media="screen">
  .underline{
    text-decoration: underline;
    color: grey;
    display: inline;
  }
  .list-group-item {
    font-size: 1.5em;
  }
  .digits{
    font-size: 1.2em;
  }
</style>
