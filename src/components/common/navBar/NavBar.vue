<template>
  <div class="nav-bar">
    <div class="user-info"><slot name="userInfo"></slot></div>
    <div class="date-info"><slot name="dateInfo"></slot></div>
    <div class="bar-info"><slot name="barInfo"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less" scoped>
.nav-bar {
  background: url('~assets/img/home/header1.png') no-repeat center;
  background-size: 100% 100%;
  height: 80px;
  position: relative;

  .user-info {
    position: absolute;
    right: 20px;
    top: 10px;
    // width: 92px;
    // height: 40px;
    // background-color: red;
  }
  .date-info {
    position: absolute;
    top: 58px;
    right: 10px;
    width: 180px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
  .bar-info {
    position: absolute;
    bottom: 1px;
    left: 10px;
    // width: 300px;
    // height: 30px;
    // background-color: red;
    color: #fff;
  }
}
</style>
