<template>
  <div class="fill">
    <h1>This is a fill page</h1>
     
      <carousel>
        <slide v-for="item in arraypic" id="cardNull">
          <cardNull v-bind:picture="item"></cardNull>
         </slide>
    </carousel>
  </div>
</template>


 <script>
 import cardNull from '../components/cardNull'
 import { Carousel, Slide } from 'vue-carousel';
  import * as api from '../api/api.js';

export default {
  name: 'fill',

 components: {
    cardNull,
    Carousel,
    Slide
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
 