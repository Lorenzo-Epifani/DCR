<template>
 <div id="cards">
  <div v-for="item in pictures" >
   <card v-bind:picture="item"></card> 
  </div>
 </div>
</template>

<script>
import card from './card.vue'
export default {
    name: 'cardarray',
    
    props: {
        pictures:{}
    },

     components: {
        card

    },

}


</script>

<style>
    #cards > * {
        display:inline-block;
         animation: bounceInUp 0.6s;
    
    }
</style>
