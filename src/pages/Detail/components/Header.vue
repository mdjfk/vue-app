<template>
  <div>
    <router-link class="header-abs" tag="div" to="/" v-show="showAbs">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-left">&#xe624;</div>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
// import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      // console.log(top)
      if (top > 50) {
        this.showAbs = false
        let opacity = top / 160
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle.opacity = opacity
        // this.opacityStyle = {opacity}
      } else {
        this.showAbs = true
      }
      // this.showAbs = top <= 50
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
.header-abs
  position: absolute
  top: 0.2rem
  left: 0.2rem
  height: 0.8rem
  width: 0.8rem
  line-height: 0.8rem
  border-radius: 0.4rem
  text-align: center
  background: rgba(0, 0, 0, 0.6)
  color: white
  .back-icon
    font-size: 0.4rem
.header-fixed
  position: fixed
  top: 0
  left: 0
  right: 0
  background: $bgColor
  height: 0.86rem
  line-height: 0.86rem
  color: #fff
  overflow: hidden
  font-size: 0.32rem
  text-align: center
  .header-left
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
    color: #fff
</style>
