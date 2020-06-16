<template>
  <div>
    <div
      v-for="(item,index) in list"
      :key="index"
    >
      <div class="title border-bottom">
        <span class="title-icon"></span>
        {{item.title}}
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
  line-height: 0.5rem
  font-size: 0.32rem
  padding: 0 0.2rem
</style>
