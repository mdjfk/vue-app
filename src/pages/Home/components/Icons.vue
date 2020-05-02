<template>
  <div class="wrapper">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon-block" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="img" :src="item.url" />
          </div>
          <p class="icon-text">{{item.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      icons: [
        {
          id: '01',
          url: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          text: '景点门票景点门票'
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
        }, {
          id: '09',
          url: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          text: 'icon-nine'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        // when pages[page] doesn't exist
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
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
    padding: 0 0.08rem
    line-height: 0.44rem
    color: $darkTextColor
    ellipsis()
</style>
