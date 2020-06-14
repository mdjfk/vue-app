<template>
  <div class="gallery" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(imgurl, index) in imgs" :key="index">
          <img :src="imgurl" class="gallery-img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true,
        loop: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('hideGallery')
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallery >>> .swiper-container
  overflow: inherit
.gallery
  z-index: 99
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  display: flex
  justify-content: center
  flex-direction: column
  background: black
  color: white
  .wrapper
    height: 0
    width: 100%
    padding-bottom: 100%
    .gallery-img
      width: 100%
    .swiper-pagination
      bottom: -1rem
</style>
