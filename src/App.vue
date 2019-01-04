<template>
  <div id="app">
    <!-- <img src="./assets/1.jpg"> -->
    <menu-comp></menu-comp>
    <router-view/>
  </div>
</template>

<script>
import MenuComp from '@/components/MenuComp'
export default {
  name: 'App',
  components: {
    MenuComp
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /**text-align: center;*/
  color: #2c3e50;
  margin-top: 0px;
}
</style>
