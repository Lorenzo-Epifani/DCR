<template>
  <div id="app">
    <Menu/>
    <router-view/>
    
  </div>
</template>


<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
     Menu
  }
}
</script>


<style lang="scss">
@import "./util/anim.css"; /* Using a string */
#app {

  text-align: center;
  color: #00E676
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
   
  }
}

html.md-theme-default {

  background-color: #616161

}
</style>
