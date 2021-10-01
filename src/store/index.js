import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toolsHandlers: {
      SlidNavagation: {
        isShowMaskLeftSlide: false,
        isShowMaskRightSlide: false
      }
    }

  },
  mutations: {
    showMaskLeftSlideNav(state) {
      state.toolsHandlers.SlidNavagation.isShowMaskLeftSlide = true
    },
    showMaskRightSlideNav(state) {
      state.toolsHandlers.SlidNavagation.isShowMaskRightSlide = true
    },
    closeMaskLeftSlideNav(state) {
      state.toolsHandlers.SlidNavagation.isShowMaskRightSlide = false
    },
  },
  actions: {

  },
  modules: {
  }
})
