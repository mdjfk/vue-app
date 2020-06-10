import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '深圳'
  },
  action: {
    changeCity (ctx, city) {
      console.log(city)
      // this.$store.commit('changeCity', city)
    }
  }
  // mutations: {
  //   changeCity (state, city) {
  //     this.$store.state.city = city
  //   }
  // }
})
