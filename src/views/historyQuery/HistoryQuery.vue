<template>
  <el-container>
    <el-aside width="250px">
      <el-menu
        default-active="1"
        background-color="#00378e"
        text-color="#fff"
        active-text-color="#409EFF"
        unique-opened
        :router="true"
      >
        <el-menu-item index="historyQuery-271" key="1">
          <i class="el-icon-menu"></i>
          <span slot="title">No.27WD纬五路电三路-1</span>
        </el-menu-item>
        <el-menu-item index="historyQuery-272" key="2">
          <i class="el-icon-menu"></i>
          <span slot="title">No.27WD纬五路电三路-2</span>
        </el-menu-item>
        <el-menu-item index="historyQuery-273" key="3">
          <i class="el-icon-menu"></i>
          <span slot="title">No.27WD纬五路电三路-3</span>
        </el-menu-item>
        <el-menu-item index="historyQuery-274" key="4">
          <i class="el-icon-menu"></i>
          <span slot="title">No.27WD纬五路电三路-4</span>
        </el-menu-item>
        <el-menu-item index="historyQuery-275" key="5">
          <i class="el-icon-menu"></i>
          <span slot="title">No.27WD纬五路电三路-5</span>
        </el-menu-item>
        <el-menu-item index="historyQuery-276" key="6">
          <i class="el-icon-menu"></i>
          <span slot="title">No.27WD纬五路电三路-6</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>面板管理</el-breadcrumb-item>
        <el-breadcrumb-item>历史查询</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 卡片视图区域 -->
      <el-card>
        <!-- 搜索与添加区域 -->
        <el-row :gutter="20">
          <el-col :span="12">
            <el-date-picker
              v-model="value2"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
            >
            </el-date-picker>
            <!-- <el-button icon="el-icon-search"></el-button> -->
          </el-col>
          <el-col :span="4">
            <el-button type="primary">原图查询</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary">检测查询</el-button>
          </el-col>
        </el-row>
        <!-- 页面切换 -->
        <div class="history-page">
          <router-view></router-view>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'HistoryQuery',
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value2: ''
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;

  .el-aside {
    height: 100%;
    background-color: #00378e;
    .el-menu {
      border-right: none;
    }
  }
  /deep/ .el-breadcrumb__inner {
    color: #fff;
  }
  /deep/ .el-breadcrumb {
    margin-bottom: 15px;
  }
  .box-card {
    width: 480px;
  }
  .history-page {
    margin-top: 15px;
    font-size: 14px;
  }
}
</style>
