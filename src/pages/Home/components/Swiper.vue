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
          url: 'https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg'

        }, {
          id: '02',
          url: 'https://imgs.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg'

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
  padding-bottom: 36.64%
  background: #eee
  .swiper-img
    overflow: hidden
    width: 100%
</style>
