<template>
  <div class="home">
        <img id="mainlogo" src="./logo.png">
        <Welcome id="wel" msg="Welcome to"/>
        <img id="textlogo" src="./mow.png">


    <!--<img alt="Vue logo" src="../assets/logo.png">-->
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>

<style>
img#mainlogo {
    zoom: 0.4;
    animation: fadein 1s
}
#wel {
      animation: fadein 1s

}
img#mainlogo:hover {
  animation: lds-heart 1s  infinite
}
img#textlogo {
  animation: fadein 2s 1s, delayinv 1s;

}
</style>

