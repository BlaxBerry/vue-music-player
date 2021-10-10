<template>
  <div>
    <v-tabs centered color="red darken-2">
      <!-- tab bar -->
      <v-tab
        v-for="tab in tabItems"
        :key="tab.searchType"
        @click="changSearchTabsType(tab.type)"
        class="common-tabs"
      >
        {{ tab.name }}
      </v-tab>

      <!-- content -->
      <v-tab-item v-for="tab in tabItems" :key="tab.searchType">
        <v-list
          dense
          class="pt-0"
          v-if="searchList.length"
          id="common-scrollContent"
        >
          <v-list-item
            v-for="item in searchList"
            :key="item.id"
            class="mb-2"
            @click="playSong(item)"
          >
            <!-- pic -->
            <v-list-item-avatar size="100" tile>
              <img :src="item.album.picUrl" />
            </v-list-item-avatar>
            <!--detail -->
            <v-list-item-content class="pt-4">
              <!-- name -->
              <v-list-item-title
                class="text-body-1 text-md-h6 font-weight-black"
                v-html="item.name"
              />
              <!-- album name  -->
              <v-list-item-subtitle
                class="text-caption text-md-body-1 py-1"
                v-html="item.album.company"
              />
              <!-- artists name -->
              <v-list-item-subtitle>
                <span
                  v-for="a in item.artists"
                  :key="a.id"
                  class="text-body-2 text-md-body-1 red--text text--darken-2 mr-3"
                  v-html="a.name"
                />
              </v-list-item-subtitle>
              <!-- tools -->
              <div class="d-flex align-center justify-space-between mt-1">
                <!-- btns -->
                <div>
                  <v-btn elevation="0" fab x-small @click="addToFavourite">
                    <v-icon dark color="pink">mdi-heart</v-icon>
                  </v-btn>
                  <v-btn
                    elevation="0"
                    fab
                    x-small
                    class="ml-2"
                    v-if="item.mvid"
                    @click="goCheckMV(item.mvid)"
                  >
                    <v-icon dark color="primary">mdi-movie-open</v-icon>
                  </v-btn>
                  <v-chip
                    small
                    dark
                    color="yellow darken-2"
                    class="ml-2"
                    v-if="item.fee == 1"
                  >
                    MVP
                  </v-chip>
                </div>
                <!-- times -->
                <!-- <span class="font-weight-black" v-if="item.fee !== 1">
                  {{ item.duration | timeFormat }}
                </span>
                <span class="font-weight-black" v-else>00:30</span> -->
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <!-- empty -->
        <Empty v-else />
      </v-tab-item>

      <!-- <v-tab-item> hello {{ searchType }} </v-tab-item>
      <v-tab-item> hello {{ searchType }} </v-tab-item>
      <v-tab-item> hello {{ searchType }} </v-tab-item> -->
    </v-tabs>
  </div>
</template>

<script>
// tab items
import { tabItems } from "@/assets/data/Tabs/SongTabItems";
// api
import GetSongs from "@/api/Songs/GetSongs";
import GetURL from "@/api/Detail/Song/getSongURL";
// components
import Empty from "@/components/Empty/index.vue";

export default {
  components: { Empty },
  data() {
    return {
      tabItems,
      searchType: 96, //default 欧美
      searchList: [],
    };
  },

  methods: {
    async search() {
      let { data } = await GetSongs({ type: this.searchType });
      this.searchList = data;
    },

    changSearchTabsType(type) {
      this.searchType = type;
      this.searchList = [];
      this.search();
    },

    async playSong(song) {
      // 1. format obj
      let { name, id } = song;
      let pic = song.album.picUrl;
      let album = {
        name: song.album.name,
        id: song.album.id,
        publishTime: song.album.publishTime,
      };
      let artists = song.artists.map((e) => {
        return {
          name: e.name,
          id: e.id,
        };
      });
      let { data } = await GetURL({ id });
      let url = data[0].url;
      let fee = song.fee == 1 ? true : false;
      let duration = song.fee == 1 ? "00:30" : song.duration;
      let params = { name, id, pic, url, duration, album, artists, fee };

      // 2. save obj selected in vuex
      this.$store.commit("saveSongSelected", params);
    },
    addToFavourite() {},
    goCheckMV(mvid) {
      this.$router.push("/mv?id=" + mvid);
    },
  },

  created() {
    this.search();
  },
};
</script>
