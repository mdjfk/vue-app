<template>
  <div>
    <div v-for="(item,index) in list" :key="index">
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

<style lang='stylus' scoped></style>
