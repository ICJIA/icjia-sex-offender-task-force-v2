<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
    <my-footer />
  </div>
</template>

<script>
import Navbar from 'components/Navbar'
import MyFooter from 'components/Footer'
import metaInfo from 'meta'
export default {
  name: 'app',
  components: {
  Navbar,
  MyFooter
}
}
</script>

<style>

</style>
