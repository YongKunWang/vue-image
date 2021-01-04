<template>
  <div :style="mainHeight">
    <el-row :gutter="10" class="history-row">
      <el-col :span="12" class="history-colum">
        <div class="history-table">
          <el-table :data="tableData" height="100%" style="width: 100%" align="center">
            <el-table-column type="index" align="center" label="#"> </el-table-column>
            <el-table-column
              prop="localPort"
              label="检测端口"
              align="center"
              width="160"
            ></el-table-column>
            <el-table-column
              prop="dateTime"
              label="检测时间"
              align="center"
              width="140"
            ></el-table-column>
            <el-table-column prop="isAlarm" label="是否报警" align="center">
              <template slot-scope="scope">
                <i v-if="scope.row.isAlarm" class="iconfont icon-alarm alertIcon"></i>
                <i v-else class="iconfont icon-alarm normalIcon"></i>
              </template>
            </el-table-column>
            <el-table-column prop="alarmInfo" label="报警详情" align="center"> </el-table-column>
            <el-table-column label="详情管理" align="center" width="130">
              <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" content="详情查看" placement="top">
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="small"
                    :disabled="scope.row.isAlarm == false"
                    @click="dealDialog(scope.row)"
                  ></el-button>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="isDeal" label="处理状态" align="center">
              <template slot-scope="scope">
                <el-tag
                  v-if="scope.row.isAlarm === false && scope.row.dealStatus === 'normal'"
                  type="success"
                  effect="dark"
                  >正常情况</el-tag
                >
                <el-tag
                  v-if="scope.row.isAlarm === true && scope.row.dealStatus === 'ignore'"
                  type="info"
                  effect="dark"
                  >忽略处理</el-tag
                >
                <el-tag
                  v-else-if="scope.row.isAlarm === true && scope.row.dealStatus === 'processing'"
                  type="warning"
                  effect="dark"
                  >正在处理</el-tag
                >
                <el-tag
                  v-else-if="scope.row.isAlarm === true && scope.row.dealStatus === 'pending'"
                  type="danger"
                  effect="dark"
                  >未经处理</el-tag
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">222</el-col>
    </el-row>
    <!-- 详情管理的dialog实现 -->
    <el-dialog
      title="报警详情处理"
      :visible.sync="dialogVisible"
      width="1400px"
      @close="dialogClosed"
      center
    >
      <el-form ref="dialogFormRef" :model="dialogFormData" label-width="70px" :inline="true">
        <el-form-item label="监测序号">
          <el-input v-model="dialogFormData.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="监测端口">
          <el-input v-model="dialogFormData.localPort" style="width: 200px" disabled></el-input>
        </el-form-item>
        <el-form-item label="检测时间">
          <el-input v-model="dialogFormData.dateTime" disabled></el-input>
        </el-form-item>
        <el-form-item label="报警详情">
          <el-input v-model="dialogFormData.alarmInfo" disabled></el-input>
        </el-form-item>
        <el-form-item label="处理状态">
          <el-select v-model="dialogFormData.dealStatus" placeholder="请选择报警处理状态" disabled>
            <el-option value="ignore" label="忽略处理" disabled></el-option>
            <el-option value="pending" label="未经处理"></el-option>
            <el-option value="processing" label="已经处理"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="dialoImgArea">
        <div class="dialogImgColum">
          <panel :title="imgDate[0].title">
            <img :src="imgDate[0].url" alt="" />
          </panel>
        </div>
        <div class="dialogImgColum">
          <panel :title="imgDate[0].title">
            <img :src="imgDate[0].url" alt="" />
          </panel>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogEnsure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { historyTableData, imgDate } from 'common/js/Statistics.js'
import Panel from 'components/common/panel/Panel'

export default {
  name: 'Statistics',
  data() {
    return {
      mainHeight: {
        height: ''
      },
      tableData: historyTableData,
      dialogVisible: false,
      dialogFormData: '',
      imgDate: imgDate
    }
  },
  components: {
    Panel
  },
  methods: {
    dealDialog(alarmData) {
      if (alarmData.isAlarm === false) {
        this.$message.success('监控无异常，无需任何操作')
      }
      this.dialogFormData = alarmData
      this.dialogVisible = !this.dialogVisible
    },
    dialogClosed() {
      console.log('dialog关闭...')
    },
    dialogEnsure() {
      this.dialogVisible = false
      console.log('dialog确定事件')
    }
  },
  created() {
    this.mainHeight.height = parseInt(`${document.documentElement.clientHeight}`) - 260 + 'px'
  },
  mounted() {
    window.addEventListener(
      'resize',
      () => {
        this.mainHeight.height = parseInt(`${document.documentElement.clientHeight}`) - 260 + 'px'
        this.screenWidth = window.innerWidth
        this.setSize()
      },
      false
    )
  }
}
</script>

<style lang="less" scoped>
.history-row {
  height: 100%;
  // background-color: red;
}
.history-colum {
  height: 100%;
  // background-color: red;
}
.el-row {
  padding-top: 15px;
}
.alertIcon {
  font-size: 20px;
  color: red;
  font-weight: bold;
}
.normalIcon {
  font-size: 20px;
  color: #00cc00;
  font-weight: bold;
}
.dialoImgArea {
  height: 500px;
  // background-color:red;
  display: flex;
  .dialogImgColum {
    flex: 1;
    margin: 5px;
  }
}
img {
  width: 100%;
  height: 100%;
}
.history-table {
  height: 100%;
  width: 100%;
  // background-color: red;
  position: relative;
  display: flex;
}
// table 绝对定位 父级相对定位
/deep/.el-table {
  position: absolute;
  color: #000;
  font-size: 12px;
}
// 滚动条的宽度
/deep/ .el-table__body-wrapper::-webkit-scrollbar {
  width: 5px; // 横向滚动条
  height: 5px; // 纵向滚动条 必写
  text-align: center;
}
// 滚动条的滑块
/deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #02d8fa;
  border-radius: 30px;
}
</style>
