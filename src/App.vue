<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import 'assets/css/base.css';
@import 'assets/css/global.css';
#app {
  height: 100%;
}
</style>
