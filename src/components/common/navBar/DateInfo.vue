<template>
  <div>
    {{ date | formatDateTime }}
  </div>
</template>

<script>
export default {
  name: 'DateInfo',
  data () {
    return {
      date: new Date()
    }
  },
  filters: {
    formatDateTime (value) {
      const date = new Date(value)
      const y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      return y + '年' + MM + '月' + d + '日' + ' ' + h + ':' + m + ':' + s
    }
  },
  mounted () {
    var that = this
    this.timer = setInterval(() => {
      that.date = new Date() // 修改数据date
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

<style lang="less" scoped></style>
