<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="img of SwiperImgs" :key="img.id">
        <img class="swiper-img" :src="img.url" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true
      },
      SwiperImgs: [
        {
          id: '01',
          url: '//img1.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_256x160_81b949d0.jpg'

        }, {
          id: '02',
          url: '//img1.qunarzz.com/sight/p0/1503/cd/cd023b889435b33.water.jpg_256x160_737bffe3.jpg'

        }]
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff

.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 50%
  background: #eee

  .swiper-img
    width: 100%
    height: 175px
</style>
