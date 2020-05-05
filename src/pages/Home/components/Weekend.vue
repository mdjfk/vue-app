<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="img-block">
          <img class="img" :src="item.imgUrl" />
        </div>
        <div class="text-block">
          <p class="img-title">{{item.title}}</p>
          <p class="img-text">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
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
    padding-bottom: 37.09%
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
