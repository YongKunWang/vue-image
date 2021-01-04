<template>
  <div :style="mainHeight">
    <div id="banner">
      <el-carousel :autoplay="false" type="card" :height="bannerHeight + 'px'">
        <el-carousel-item v-for="item in 6" :key="item">
          <img src="~assets/img/resources/1.jpg" v-if="item == 1" alt="" />
          <img src="~assets/img/resources/2.jpg" v-if="item == 2" alt="" />
          <img src="~assets/img/resources/3.jpg" v-if="item == 3" alt="" />
          <img src="~assets/img/resources/4.jpg" v-if="item == 4" alt="" />
          <img src="~assets/img/resources/5.jpg" v-if="item == 5" alt="" />
          <img src="~assets/img/resources/6.jpg" v-if="item == 6" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'historyPage',
  data() {
    return {
      mainHeight: {
        height: ''
      },
      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0
    }
  },
  methods: {
    setSize: function() {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (700 / 1920) * this.screenWidth
    }
  },
  created() {
    this.mainHeight.height = parseInt(`${document.documentElement.clientHeight}`) - 260 + 'px'
  },
  mounted() {
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth
    this.setSize()

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
#banner {
  padding-top: 15px;
}
img {
  width: 100%;
  height: inherit;
}
/deep/ .el-carousel__item {
  width: 80%;
  left: -15%;
}
</style>
