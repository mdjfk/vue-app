<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="buttonList">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="buttonList">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
        </div>
        <div class="title border-topbottom">B</div>
        <div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
          <div class="item-list border-bottom">北京</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: 0.54rem
    padding-left: 0.2rem
    background: #eee
    color: #666
    font-size: 0.26rem
  .buttonList
    overflow: hidden
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        border: 1px solid #ccc
        margin: 0.1rem
        padding: 0.1rem
        border-radius: 0.15rem
        text-align: center
  .item-list
    line-height: 0.7rem
    padding-left: 0.2rem
</style>
