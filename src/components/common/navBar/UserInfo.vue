<template>
  <div>
    <el-avatar
      size="medium"
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    ></el-avatar>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        www，你好
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="e">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command)
    }
  }
}
</script>

<style lang="less" scoped>
.el-dropdown {
  top: -12px;
  left: 10px;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
}
.el-dropdown-link {
  cursor: pointer;
  font-size: 16px;
  line-height: 30px;
  color: #fff;
  font-weight: normal;
}
</style>
