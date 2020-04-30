<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <div class="icon-block">
          <div class="icon-img">
            <img class="img" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png" />
          </div>
          <p class="icon-text">icon-one</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="icon-block">
          <div class="icon-img">
            <img class="img" src="//s.qunarzz.com/homenode/images/touchheader/flight.png" />
          </div>
          <p class="icon-text">icon-two</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true
      },
      icons: [{
        id: '01',
        url: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        text: 'icon-one'
      },
      {
        id: '02',
        url: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        text: 'icon-two'
      },
      {
        id: '03',
        url: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        text: 'icon-three'
      },
      {
        id: '04',
        url: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        text: 'icon-four'
      },
      {
        id: '05',
        url: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        text: 'icon-five'
      },
      {
        id: '06',
        url: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        text: 'icon-six'
      },
      {
        id: '07',
        url: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        text: 'icon-seven'
      },
      {
        id: '08',
        url: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        text: 'icon-eight'
      }]

    }
  },
  computed: {
    pages () {
      var pages = []
      var pageNum = Math.ceil(this.icons.length / 8)
      for (let i = 0; i < pageNum; i++) {
        let arr = []
        pages.push(arr)
      }
      for (let j = 0; j < this.icons.length; j++) {
        pages[Math.ceil(j / 8) - 1].push(j)
      }
      return pages
    }

  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'

.wrapper >>> .swiper-container
  height: 0
  padding-bottom: 50%

.icon-block
  position: relative
  width: 25%
  height: 0
  padding-bottom: 25%
  float: left

  .icon-img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0.44rem
    padding: 0.1rem
    box-box-sizing: border-box

    .img
      display: block
      margin: 0 auto
      height: 100%

  .icon-text
    position: absolute
    text-align: center
    left: 0
    right: 0
    bottom: 0
    height: 0.44rem
    line-height: 0.44rem
    color: $darkTextColor
</style>
