import Vue from 'vue'
import Vuex from 'vuex'
// api
import searchList from '../api/Search/search'
import getSongListPic from '../api/Detail/Song/getSongPic'
import getSongURL from '../api/Detail/Song/getSongURL'
import getSheetDetail from '../api/Detail/Album/sheetDetail'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toolsHandlers: {
      SlidNavagation: {
        isShowMaskLeftSlide: false,
        isShowMaskRightSlide: false
      }
    },
    searchResult: {
      list: {
        songs: [],
        albums: [],
        mvs: []
      },
      count: 0,
      hasMore: false
    },
    selectedItem: {
      song: {},
      album: {}
    },
    details: {
      albumDetails: {}
    }

  },

  getters: {
    searchResultSongList: state => {
      return state.searchResult.list.songs
    },
    songSelected: state => {
      return state.selectedItem.song
    },
    searchResultAlbumList: state => {
      return state.searchResult.list.albums
    },
    albumSelected: state => {
      return state.selectedItem.album
    },
  },
  mutations: {
    // handle Navagation
    showMaskLeftSlideNav(state) {
      state.toolsHandlers.SlidNavagation.isShowMaskLeftSlide = true
    },
    showMaskRightSlideNav(state) {
      state.toolsHandlers.SlidNavagation.isShowMaskRightSlide = true
    },
    closeMaskLeftSlideNav(state) {
      state.toolsHandlers.SlidNavagation.isShowMaskRightSlide = false
    },
    // search
    saveSearchResult(state, params) {
      state.searchResult = params
    },
    // save song selected
    saveSongSelected(state, params) {
      state.selectedItem.song = params
    },
    // save album selected
    saveAlbumSelected(state, params) {
      state.selectedItem.album = params
    },
    // save album details
    saveAlbumDetails(state, params) {
      state.details.albumDetails = params
    }
  },
  actions: {
    // get request search result in Search View
    async search(context, params) {
      let res = await searchList(params)
      let result = {
        list: {
          songs: [],
          albums: [],
          mvs: []
        },
        count: 0,
        hasMore: false
      }
      // songs
      if (params.type == 1) {
        let { songs } = res
        songs.forEach(async item => {
          item.pic = 'https://cdn.vuetifyjs.com/images/cards/halcyon.png'
          // pic
          let pic = await getSongListPic({ ids: item.id })
          item.pic = pic.songs[0].al.picUrl
          // url
          let url = await getSongURL({ id: item.id })
          item.url = url.data[0].url
        })
        result.count = res.songCount
        result.hasMore = res.hasMore
        result.list.songs = songs
      }
      // albums
      if (params.type == 1000) {
        // res.playlists.forEach(async item => {
        //   let { playlist } = await getSheetDetail({ id: item.id })
        //   item.tags = playlist.tags
        //   item.updateTime = playlist.updateTime
        //   item.tracks = playlist.tracks
        // })
        result.count = res.playlistCount
        result.hasMore = res.hasMore
        result.list.albums = res.playlists
      }
      // MVs
      if (params.type == 1004) {
        result.count = res.mvCount
        result.list.mvs = res.mvs
      }
      context.commit('saveSearchResult', result)
    },
    // get album Details
    async getAlbumDetails(context, params) {
      let { playlist } = await getSheetDetail({ id: params })
      // let { name, description, creator, tags, tracks, updateTime } = playlist
      // playlist = { name, description, creator, tags, tracks, updateTime }
      context.commit('saveAlbumDetails', playlist)
    }
  },
  modules: {
  }
})
