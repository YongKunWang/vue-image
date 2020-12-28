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

<style lang="less" scoped>
@import 'assets/css/base.css';
@import 'assets/css/global.css';
#app {
  background: url('assets/img/login/bgc1.jpg') no-repeat center;
  background-size: 100% 100%;
  height: 100%;
}
</style>
