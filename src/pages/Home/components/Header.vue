<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    // 展示getters用法
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'

.header
  background-color: $bgColor
  line-height: 0.86rem
  display: flex
  color: #fff

  .header-left
    float: left
    width: 0.64rem
    text-align: center

  .header-input
    flex: 1
    background-color: #fff
    border-radius: 0.1rem
    margin-top: 0.12rem
    margin-left: 0.2rem
    padding-left: 0.2rem
    height: 0.64rem
    line-height: 0.64rem
    color: #ccc

  .header-right
    float: right
    min-width: 1.04rem
    padding: 0 0.1rem
    text-align: center
    color: #fff

    .arrow
      margin-left: -0.04rem
      font-size: 0.2rem
</style>
