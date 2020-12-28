<template>
  <el-container id="login-box">
    <el-header>
      <h2>{{ title }}</h2>
    </el-header>
    <el-main>
      <hr />
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'LoginBox',
  props: {
    title: String
  }
}
</script>

<style lang="less" scoped>
#login-box {
  background-color: rgba(0, 0, 0, 0.4);
  height: 380px;
  width: 550px;
  border-radius: 51px;
  box-shadow: 0 0 10px #000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-weight: bold;
  line-height: 60px;
  letter-spacing: 2px;
  padding: 0;
  margin: 0;

  .el-header {
    margin: 20px;
    padding: 0;
  }
  .el-main {
    position: relative;
    padding: 0;
    margin: 0;
  }

  hr {
    margin: 0 0 8px;
  }
}
</style>
