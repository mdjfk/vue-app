<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="img-block">
          <img class="img" :src="item.url" />
        </div>
        <div class="text-block">
          <p class="img-title">{{item.title}}</p>
          <p class="img-text">{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      list: [{
        id: '001',
        url: 'https://imgs.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
        title: '深圳野生动物园',
        text: '深圳野生动物园深圳野生动物园深圳野生动物园'
      }, {
        id: '002',
        url: 'https://imgs.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
        title: '深圳野生动物园',
        text: '深圳野生动物园深圳野生动物园深圳野生动物园'
      }, {
        id: '003',
        url: 'https://imgs.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
        title: '深圳野生动物园',
        text: '深圳野生动物园深圳野生动物园深圳野生动物园'
      }, {
        id: '004',
        url: 'https://imgs.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
        title: '深圳野生动物园',
        text: '深圳野生动物园深圳野生动物园深圳野生动物园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  line-height: 0.8rem
  text-indent: 0.2rem
  background: #eee
.item
  margin-bottom: 0.1rem
  .img-block
    overflow: hidden
    height: 0
    padding-bottom: 37.67%
    .img
      width: 100%
  .text-block
    padding: 0.1rem
    .img-title
      line-height: 0.65rem
      font-size: 0.32rem
      ellipsis()
    .img-text
      line-height: 0.45rem
      color: darkgrey
      ellipsis()
</style>
