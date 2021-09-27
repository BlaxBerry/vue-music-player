import Vue from 'vue'
import Vuex from 'vuex'
// apis
import Search from '../api/Search/search'
import GetSongPic from '../api/Detail/Song/getSongPic'
import GetSongUrl from '../api/Detail/Song/getSongURL'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appShowSideNav: false,
    appShowFooterPlayer: false,
    searchResultList: [],
    songSelected: {},
  },

  mutations: {
    showAppSideNav(state) {
      state.appShowSideNav = true
    },
    saveSearchResultList(state, params) {
      state.searchResultList = params
    },
    saveSongSelected(state, params) {
      state.songSelected = params
      state.appShowFooterPlayer = true
    }
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
    },
    async getSongUrl(context, params) {
      let { id } = params
      let res = await GetSongUrl({ id })
      let url = res.data[0].url
      params.url = url
      context.commit('saveSongSelected', params)
    }
  },
  modules: {
  }
})
