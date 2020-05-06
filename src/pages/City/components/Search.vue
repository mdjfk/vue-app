<template>
  <div class="search">
    <input type="text" class="input-block" placeholder="输入城市名或拼音" />
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
.search
  overflow: hidden
  height: 0.72rem
  padding: 0 0.1rem
  background: $bgColor
.input-block
  width: 100%
  box-sizing: border-box
  height: 0.62rem
  line-height: 0.62rem
  padding: 0 0.14rem
  text-align: center
  border-radius: 0.1rem
  color: #666
</style>
