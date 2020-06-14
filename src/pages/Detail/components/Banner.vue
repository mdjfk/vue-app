<template>
  <div>
    <div class="wrapper" @click="handleBannerClick">
      <img
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        class="banner-img"
      />
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="galleryDisplay" @hideGallery="hideGallery"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg', 'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'],
      galleryDisplay: false
    }
  },
  methods: {
    handleBannerClick () {
      this.galleryDisplay = true
    },
    hideGallery () {
      this.galleryDisplay = false
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    position: absolute
    display: flex
    align-items: flex-end
    justify-content: space-between
    left: 0
    right: 0
    bottom: 0
    line-height: 0.4rem
    padding: 0.12rem
    color: white
    background-image: linear-gradient(top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))
    .banner-title
      font-size: 0.32rem
    .banner-number
      height: 0.32rem
      line-height: 0.32rem
      background: rgba(255, 255, 255, 0.4)
      padding: 0.02rem 0.26rem
      border-radius: 0.2rem
      font-size: 0.24rem
      .banner-icon
        font-size: 0.24rem
</style>
