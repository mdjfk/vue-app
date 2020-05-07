<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="buttonList">
        <div class="button-wrapper">北京</div>
        <div class="button-wrapper">北京</div>
        <div class="button-wrapper">北京</div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityList'
}
</script>
<style lang="stylus" scoped>
.title
  line-height: 0.44rem
  text-indent: 0.2rem
  background: #eee
  color: #666
  font-size: 0.26rem
.buttonList
  overflow: hidden
  padding: 0.1rem 0.6rem 0.1rem 0.1rem
  .button-wrapper
    float: left
    width: 33.33%
    border: 1px solid #ccc
    margin: 0.1rem
    padding: 0.1rem
    border-radius: 0.15rem
    text-align: center
</style>
