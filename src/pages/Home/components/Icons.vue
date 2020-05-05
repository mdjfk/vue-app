<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon-block" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="img" :src="item.imgUrl" />
          </div>
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        // 不自动滚动到第二页
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
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
.wrapper
  margin-top: 0.12rem
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
