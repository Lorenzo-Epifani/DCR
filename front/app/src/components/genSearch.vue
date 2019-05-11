<template>
  <div class="genSearch">
    <md-field id="search">
        
        <label>Type your search here!</label>
        
        <md-input v-model="type" ref="search" name="inp" id="inp"></md-input>
    
        <md-button class="md-icon-button" v-on:click="onClick()">
            <md-icon>search</md-icon>
        </md-button>
    
    </md-field>

  </div>
</template>

<script>
import * as api from '../api/api.js'
export default {
    
    name: 'genSearch',

    data () {
        return {  
        type:null,
        }
    },
    methods: { onClick () {
        var bodyFormData = new FormData();
       // console.log(this.$refs.search.value) 
        bodyFormData.append('searchinput', this.$refs.search.value)
       // console.log(bodyFormData.search)
        api.generalSearch(this.$refs.search.value)

            
    
  
        }}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

#search * , #search {

    display: inline;
    zoom: 3,
}
</style>
