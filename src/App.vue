<template>
   <div id="app" class="container-fluid">
      <div class="row" id="header">
         <div class="col-md-12 text-center">
            <router-link to="/">
                <img src="./assets/bannerVuewjs.jpg">
            </router-link>
            <h1>Vue.js ({{ dependencies.vue }}) template that uses Qdt-components ({{ dependencies['qdt-components'] }}) </h1>
         </div>
      </div>
      <router-view/>
   </div>
</template>

<script>
import { dependencies } from '../package.json';

export default {
  name: 'App',
  data: () => ({
    dependencies,
  }),
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container-fluid {
  padding-left: 15px;
  padding-right: 15px;
  #header {
      img {
          width: 100%;
          max-width: 800px;
      }
  }
  .row {
      padding-bottom: 50px;
  }
}
.text-center {
    text-align: center;
}
</style>
