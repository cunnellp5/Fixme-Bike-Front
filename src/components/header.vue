<template lang="html">

</template>

<script>
import axios from 'axios'
export default {
  id: 11,
  name: 'bicyclist',
  data(){
    return {
      bicyclist: {}
    }
  },
  methods: {
  loadBicyclist: function () {
    axios.get('https://fixmebike.herokuapp.com/user').then((response) => {
      console.log(localStorage.id);
      this.bicyclist = response.data["0"]
      this.w = this.bicyclist.id
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
.nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover {
  background-color: #404040;
}
</style>
