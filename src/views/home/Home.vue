<template>
  <div id="screen-container">
    <el-container>
      <el-header>
        <nav-bar>
          <user-info slot="userInfo"></user-info>
          <date-info slot="dateInfo"></date-info>
          <bar-info slot="barInfo"></bar-info>
        </nav-bar>
      </el-header>

      <el-main :style="mainHeight">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import UserInfo from 'components/common/navBar/UserInfo'
import DateInfo from 'components/common/navBar/DateInfo'
import BarInfo from 'components/common/navBar/BarInfo'
export default {
  name: 'Home',
  data() {
    return {
      mainHeight: {
        height: ''
      }
    }
  },
  components: {
    NavBar,
    UserInfo,
    DateInfo,
    BarInfo
  },
  methods: {},
  created() {
    this.mainHeight.height = (parseInt(`${document.documentElement.clientHeight}`) - 80) + 'px'
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.mainHeight.height = (parseInt(`${document.documentElement.clientHeight}`) - 80) + 'px'
      // console.log(this.mainAeight.height)
    }, false)
  }
}
</script>

<style lang="less" scoped>
#screen-container {
  background: url('~assets/img/home/bodyBgc1.png') no-repeat center;
  background-size: 100% 100%;
  height: 100%;

  .el-header {
    width: 100%;
    height: 80px !important;
    padding: 0;
  }

  .el-main {
    padding: 5px;
    // background-color: red;
  }
}
</style>
