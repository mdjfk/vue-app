<template>
  <div>
    <div
      v-for="(item,index) in list"
      :key="index"
    >
      <div class="title border-bottom">
        <span class="title-icon"></span>
        {{item.title}}
        <div v-if="item.children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
.title
  line-height: 0.8rem
  font-size: 0.32rem
  padding: 0 0.2rem

  .title-icon
    display: inline-block
    position: relative
    top: 0.07rem
    width: 0.36rem
    height: 0.36rem
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat
    background-size: 0.4rem 3rem
</style>
