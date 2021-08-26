import Vue from 'vue'
import Vuex from 'vuex'
// api
import { GetSongURL } from "@/api/songURL.js";
import { GetSongDetail } from "@/api/songDetail.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    song: {},
    url: ''
  },
  mutations: {
    getSongURL(state, data) {
      state.url = data
    },
    getSongDetail(state, data) {
      state.song.name = data.name;
      state.song.album = data.alia;
      state.song.pic = data.al.picUrl;
      state.song.artist = data.ar[0].name;
      // console.log(state.song);
    }
  },
  actions: {
    getSongSelected(context, id) {
      // 1. get song detail
      GetSongDetail({ ids: id }).then(({ data }) => {
        context.commit('getSongDetail', data.songs[0])
      });
      // 2. get song URL
      GetSongURL({ id: id }).then(({ data }) => {
        context.commit('getSongURL', data.data[0].url)
      });
    }
  },
  modules: {
  }
})
