<template>
  <div :style="mainHeight">
    <el-row :gutter="10" class="statistics-row">
      <el-col :span="12" class="statistics-colum">
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
      <el-col :span="12" class="statistics-colum">
        <el-row class="statistics-pie">
          <div id="pie-area"></div>
        </el-row>
        <el-row class="statistics-bar">
          <div id="bar-area"></div>
        </el-row>
      </el-col>
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
          <panel :title="imgDate[6].title">
            <img :src="imgDate[6].url" alt="" />
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

import * as echarts from 'echarts'

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
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pie-area'))
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '异常情况统计',
        subtext: 'No.27WD纬五路电三路-2',
        // title 组件离容器左侧的距离
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
        formatter: '{a} <br />{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        data: [
          '黑色油污',
          '黑色油毡',
          '黄色油毡',
          '水位过低',
          '轻微漂浮物',
          '漂浮物',
          '正常',
          '白色油毡',
          '其他'
        ]
      },
      series: [
        {
          name: '场景分析',
          type: 'pie',
          // 饼图的半径
          radius: '50%',
          // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
          center: ['50%', '50%'],
          // 选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，
          // 字符串取值可选'single'，'multiple'，分别表示单选还是多选。
          selectedMode: 'single',
          data: [
            { value: 1, name: '黑色油污' },
            { value: 2, name: '黑色油毡' },
            { value: 3, name: '黄色油毡' },
            { value: 4, name: '水位过低' },
            { value: 5, name: '轻微漂浮物' },
            { value: 6, name: '漂浮物' },
            { value: 7, name: '正常' },
            { value: 8, name: '白色油毡' },
            { value: 9, name: '其他' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)

    var myChart1 = echarts.init(document.getElementById('bar-area'))
    var option1 = {
      title: {
        text: '每天异常统计分析',
        subtext: 'No.27WD纬五路电三路-2',
        left: 'center'
      },
      tooltip: {
        show: true, // ---是否显示提示框,默认为true
        trigger: 'item', // ---数据项图形触发
        axisPointer: {
          // ---指示样式
          type: 'shadow',
          axis: 'auto'
        },
        padding: 5,
        textStyle: {
          // ---提示框内容样式
          color: '#fff'
        }
      },

      xAxis: {
        type: 'category',
        data: [
          '2021-01-01',
          '2021-01-02',
          '2021-01-03',
          '2021-01-04',
          '2021-01-05',
          '2021-01-06',
          '2021-01-07',
          '2021-01-08',
          '2021-01-09',
          '2021-01-10'
        ],
        axisTick: { show: false }, // 隐藏刻度
        axisLine: { show: false } // 单独隐藏坐标线
      },
      yAxis: {
        type: 'value',
        axisTick: { show: false }, // 隐藏刻度
        axisLine: { show: false } // 单独隐藏坐标线
      },
      series: [
        {
          name: '每天异常分析',
          type: 'bar',
          legendHoverLink: true,
          data: [10, 2, 4, 5, 0, 2, 6, 1, 3, 7],
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(255, 255, 255, 0)'
          },
          itemStyle: {
            // ---图形形状
            color: '#3189cf',
            barBorderRadius: [18, 18, 0, 0]
          },
          barWidth: '20', // ---柱形宽度
          barCategoryGap: '20%' // ---柱形间距
        }
      ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1)

    window.addEventListener(
      'resize',
      () => {
        this.mainHeight.height = parseInt(`${document.documentElement.clientHeight}`) - 260 + 'px'
        this.screenWidth = window.innerWidth
        myChart.resize()
        myChart1.resize()
      },
      false
    )
  }
}
</script>

<style lang="less" scoped>
.statistics-row {
  height: 100%;
  // background-color: red;
}
.statistics-colum {
  height: 100%;
  // background-color: red;
}
.el-row {
  // padding-top: 15px;
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
.statistics-pie {
  height: 50%;
  // background-color: red;
  #pie-area {
    width: 100%;
    height: 100%;
    // background-color: red;
  }
}
.statistics-bar {
  height: 50%;
  // background-color: green;
  #bar-area {
    width: 100%;
    height: 100%;
    // background-color: red;
  }
}
</style>
