<template>
  <div id="home-container">
    <div class="header-container">
      <nav-bar>
        <user-info slot="userInfo"></user-info>
        <date-info slot="dateInfo"></date-info>
        <bar-info slot="barInfo"></bar-info>
      </nav-bar>
    </div>

    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import UserInfo from 'components/common/navBar/UserInfo'
import DateInfo from 'components/common/navBar/DateInfo'
import BarInfo from 'components/common/navBar/BarInfo'
export default {
  name: 'Home',
  components: {
    NavBar,
    UserInfo,
    DateInfo,
    BarInfo
  }
}
</script>

<style lang="less" scoped>
#home-container {
  background: url('~assets/img/home/bodyBgc1.png') no-repeat center;
  background-size: 100% 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header-container {
    width: 100%;
    height: 80px;
  }

  .main-container {
    // background-color: red;
    flex: 1;
    display: flex;
  }
}
</style>
