<template>
  <div class="genSearch">
    <md-field id="search">
        
        <label>Type your search here!</label>
        
        <md-input v-model="type"></md-input>
    
        <md-button class="md-icon-button ">
            <md-icon>search</md-icon>
        </md-button>
    
    </md-field>

  </div>
</template>

<script>
export default {
    
    name: 'genSearch',

    data () {
        return {  
        type:null,
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

#search * , #search {

    display: inline;
    zoom: 3,
}
</style>
