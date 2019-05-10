<template>
  <div class="fill">
    <h1>This is a fill page</h1>
      <div v-for="item in arraypic" >
           <div>{{item.rel}}</div>  <!--specificare la seleione dell elemento del json-->

      </div>

  </div>
</template>


 <script>
  import * as api from '../api/api.js';

export default {
  name: 'fill',

  components: {
    
    },

  data () {
    return {  
              arraypic:null,
              output:null
      }
    },

  mounted () {
    api
      .getAllData()
      .then(response => {
      this.arraypic = response
      });
    
    }  ,

  
}
</script>
 
 
 <style>
 
 </style>
 