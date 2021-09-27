import Vue from 'vue'
import Vuex from 'vuex'
// apis
import Search from '../api/Search/search'
import GetSongPic from '../api/Detail/Song/getSongPic'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appShowSideNav: false,
    searchResultList: [],

  },

  mutations: {
    showAppSideNav(state) {
      state.appShowSideNav = true
    },
    saveSearchResultList(state, params) {
      state.searchResultList = params
    },

  },
  actions: {
    async getSearchResultList(context, params) {
      let { songs } = await Search(params)
      context.commit('saveSearchResultList', songs)
    },
    async getSearchResultSongsListPic(context, params) {
      let { songs } = await Search(params)
      songs.forEach(async item => {
        item.pic = 'https://cdn.vuetifyjs.com/images/cards/halcyon.png'
        let pic = await GetSongPic({ ids: item.id })
        item.pic = pic.songs[0].al.picUrl
      })
      context.commit('saveSearchResultList', songs)
      // // if it's song list, get song list pic
      // if (params.type == 1) {
      
      // }
    }
  },
  modules: {
  }
})
