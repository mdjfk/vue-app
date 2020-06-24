<template>
  <div>
    <div
      class="wrapper"
      @click="handleBannerClick"
    >
      <img
        :src="bannerImg"
        class="banner-img"
      />
      <div class="banner-info">
        <div class="banner-title">{{ this.bannerTitle }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
        :imgs="gallaryImgs"
        v-show="galleryDisplay"
        @hideGallery="hideGallery"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    FadeAnimation
  },
  data () {
    return {
      galleryDisplay: false
    }
  },
  props: {
    bannerTitle: String,
    bannerImg: String,
    gallaryImgs: Array
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
