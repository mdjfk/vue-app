<template>
  <div>
    <div class="header">
      <div>城市选择</div>
      <router-link to="/">
        <div class="iconfont header-left">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  position: relative
  overflow: hidden
  height: 0.86rem
  line-height: 0.86rem
  font-size: 0.32rem
  text-align: center
  color: #fff
  background: $bgColor
  .header-left
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    text-align: center
    color: #fff
</style>
