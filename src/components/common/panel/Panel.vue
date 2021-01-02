<template>
  <el-row class="el-row">
    <el-card>
      <div class="panel">
        <div class="panel-colum">
          <h2>{{ title }}</h2>
        </div>
        <div class="panel-colum">
          <div class="panel-body">
            <slot></slot>
          </div>
        </div>
        <div class="panel-footer"></div>
      </div>
    </el-card>
  </el-row>
</template>

<script>
export default {
  name: 'Panle',
  props: {
    title: String,
    imgurl: String
  }
}
</script>

<style lang="less" scoped>
.el-row {
  height: 100%;
}
.el-card {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: transparent;
  border: transparent;
  /deep/ .el-card__body {
    padding: 0;
    margin: 0;
    flex: 1;
  }
}
.panel {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0 10px 10px;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: url('~assets/img/panel/line.png') rgba(0, 0, 0, 0.4);
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: '';
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: '';
  }
  .panel-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 20px;
      height: 20px;
      border-left: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
      content: '';
    }
    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 20px;
      height: 20px;
      border-right: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
      content: '';
    }
  }
  .panel-colum {
    &:nth-child(1) {
      height: 30px;
      margin: 0 auto;
    }
    &:nth-child(2) {
      flex: 1;
      // background-color: #fff;
    }
  }
  h2 {
    font-size: 16px;
    padding: 0 30px;
    background-color: rgba(0, 0, 0, 0.5);
    background-size: 100% 100%;
    border-bottom: 1px solid #2b33ff;
    border-radius: 0 0 5px 5px;
    box-shadow: 2px 2px 5px rgba(15, 0, 255, 0.5);
    line-height: 25px;
    text-align: center;
    color: #fff;
    font-weight: 700;
  }
  .panel-body {
    height: 100%;
    width: 100%;
    // background-color: #fff;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
