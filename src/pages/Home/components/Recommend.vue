<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="img-block">
          <img class="img" :src="item.url" />
        </div>
        <div class="text-block">
          <p class="img-title">{{item.title}}</p>
          <p class="img-text">{{item.text}}</p>
          <button class="img-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        url: 'https://imgs.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
        title: '深圳野生动物园',
        text: '深圳野生动物园深圳野生动物园深圳野生动物园'
      }, {
        id: '002',
        url: 'https://imgs.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
        title: '深圳野生动物园',
        text: '深圳野生动物园深圳野生动物园深圳野生动物园'
      }, {
        id: '003',
        url: 'https://imgs.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
        title: '深圳野生动物园',
        text: '深圳野生动物园深圳野生动物园深圳野生动物园'
      }, {
        id: '004',
        url: 'https://imgs.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
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
  margin-top: 0.2rem
  line-height: 0.8rem
  text-indent: 0.2rem
  background: #eee
.item
  padding: 0.13rem
  display: flex
  .img-block
    width: 25%
    .img
      width: 100%
  .text-block
    margin-left: 0.08rem
    flex: 1
    padding: 0.1rem
    min-width: 0
    .img-title
      line-height: 0.54rem
      font-size: 0.32rem
      ellipsis()
    .img-text
      line-height: 0.4rem
      color: darkgrey
      ellipsis()
    .img-button
      line-height: 0.44rem
      margin-top: 0.2rem
      background: #ff9300
      padding: 0 0.2rem
      border-radius: 0.06rem
      color: #fff
</style>
