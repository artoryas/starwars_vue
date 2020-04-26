<template>
  <div id="app">
    <Header />
    <router-view class="margin-top"/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import M from 'materialize-css';

export default {
  name: 'App',
  components: {
    Header
  },
  mounted(){
    M.AutoInit();
  }
}
</script>

<style>
 #app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
 }
 .margin-top{
   margin-top: 20px;
 }
span{
    font-weight: bold;
}
h2{
  margin-top: 0 !important;
}
</style>
