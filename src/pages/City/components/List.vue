<template>
  <div
    class="list"
    ref="wrapper"
  >
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="buttonList">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="buttonList">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item,key) of allCities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div>
          <div
            class="item-list border-bottom"
            v-for="city of item"
            :key="city.id"
            @click="handleCityClick(city.name)"
          >{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    allCities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
        // console.log(ele)
      }
    }
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
