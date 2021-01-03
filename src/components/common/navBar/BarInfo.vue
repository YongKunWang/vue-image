<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="面板管理" name="panelManagement"></el-tab-pane>
    <el-tab-pane label="实时检测" name="realtimeDetection"></el-tab-pane>
    <el-tab-pane label="历史查询" name="historyQuery"></el-tab-pane>
    <el-tab-pane label="信息统计" name="informationStatistics"></el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: 'BarItem',
  data() {
    return {
      activeName: 'realtimeDetection'
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
      // console.log(tab.name)
      this.$router.push('/' + tab.name)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-tabs__header {
  margin: 0 0 0;
}
/deep/ .el-tabs__item {
  color: #aaddff;
  height: 30px;
  line-height: 30px;
  font-weight: 500;
}
/deep/ .el-tabs__nav-wrap::after {
  background-color: #1674c4;
}

/deep/ .el-tabs__active-bar {
  background-color: #fff;
}
</style>
