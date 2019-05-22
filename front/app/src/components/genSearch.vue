<template>
  <div class="genSearch">
    <md-field id="search">
        
        <label>Type your search here!</label>
        
        <md-input v-model="type" ref="search" name="inp" id="inp"></md-input>
    
        <md-button class="md-icon-button" v-on:click="onClick()">
            <md-icon>search</md-icon>
        </md-button>
    
    </md-field>
    <cardarray v-bind:pictures="this.res"></cardarray>

  </div>
</template>

<script>
import * as api from '../api/api.js'
import cardarray from '@/components/cardarray.vue'
export default {
    
    name: 'genSearch',

    data () {
        return {  
        type:null,
        res:null
        }
    },
    methods: { onClick () {
        var bodyFormData = new FormData();
       // console.log(this.$refs.search.value) 
        this.res=null
        bodyFormData.append('searchinput', this.$refs.search.value)
       // console.log(bodyFormData.search)
        api.generalSearch(this.$refs.search.value).then(response =>{
            this.res=response
            })
        }
    },

    components: {
        cardarray

    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

#search * , #search {

    display: inline;
    zoom: 3,
}
div.genSearch {
    animation: fadein 2s
}
</style>
