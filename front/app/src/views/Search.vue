<template>
  <div class="search">
  <genSearch></genSearch> 
  </div>
</template>


<script>
import genSearch from '@/components/genSearch.vue'
import cardarray from '@/components/cardarray.vue'
export default {
    name: 'Search',

    components: {
      genSearch,
      cardarray
    },

  
}
</script>
