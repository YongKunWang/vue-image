<template>
  <div :style="mainHeight">
    <el-row>
      <el-col :span="24">
        <el-carousel type="card" height="440px">
          <el-carousel-item v-for="item in 6" :key="item">
            <img src="~assets/img/resources/1.jpg" v-if="item == 1" alt="" />
            <img src="~assets/img/resources/2.jpg" v-if="item == 2" alt="" />
            <img src="~assets/img/resources/3.jpg" v-if="item == 3" alt="" />
            <img src="~assets/img/resources/4.jpg" v-if="item == 4" alt="" />
            <img src="~assets/img/resources/5.jpg" v-if="item == 5" alt="" />
            <img src="~assets/img/resources/6.jpg" v-if="item == 6" alt="" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'historyPage',
  data() {
    return {
      mainHeight: {
        height: ''
      }
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
        // console.log(this.mainAeight.height)
      },
      false
    )
  }
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: auot;
}
</style>
