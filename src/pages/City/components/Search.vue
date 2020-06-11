<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="input-block" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-list" v-show="keyword" ref="search">
      <ul>
        <li
          class="search-list-item border-bottom"
          v-for="item of result"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-list-item border-bottom" v-show="hasNoData">没有找到匹配城市</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      result: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.result.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.keyword) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const matches = []
          for (let i in this.cities) {
            this.cities[i].forEach(element => {
              if (element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
                matches.push(element)
              }
            })
          }
          this.result = matches
          this.scroll.scrollToElement(this.$refs.search)
        }, 100)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
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

.search-list
  z-index: 1
  background: #eee
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0

  .search-list-item
    line-height: 0.32rem
    padding: 0.2rem
    color: #666
    background: #fff
</style>
