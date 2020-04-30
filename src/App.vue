<template>
  <div id="app">
    <Header />
    <router-view class="margin-top"/>
  </div>
</template>

<script>
import Header from './components/Header';
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

<style lang="stylus">
 #app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  width: 100%
 
 .margin-top
   margin-top: 20px
 
span
    font-weight: bold
@media (max-width 600px)
  .card.horizontal
    flex-direction column
    .card-image
      max-width 100% !important
</style>
