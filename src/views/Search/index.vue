<template>
  <div>
    <v-tabs color="red" right v-if="searchResultList.length">
      <!-- tab btns -->
      <v-tab
        v-for="item in ['Songs', 'Albums', 'Mvs']"
        :key="item"
        class="mytext-caption text-sm-body-2 text-md-body-1"
        >{{ item }}
      </v-tab>

      <!-- 1 -->
      <v-tab-item>
        <SongsList :songList="searchResultList" />
      </v-tab-item>

      <!-- 2 -->
      <v-tab-item>
        <AlbumsList />
      </v-tab-item>

      <!-- 3 -->
      <v-tab-item>
        <MVsList />
      </v-tab-item>
    </v-tabs>

    <!-- loading -->
    <Loading v-if="!searchResultList.length" />

    <!-- pages -->
    <div class="text-center pt-3" v-if="searchResultList.length">
      <v-pagination v-model="searchPage" :length="4" circle color="red" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// components
import Loading from "../../components/Loading/index.vue";
import SongsList from "./SearchSongs.vue";
import AlbumsList from "./SearchAlbums.vue";
import MVsList from "./SearchMVs.vue";

export default {
  components: { SongsList, AlbumsList, MVsList, Loading },

  data() {
    return {
      searchQueryKeyword: "",
      searchPage: 1,
      searchType: 1,
      // searchResultList: [],
    };
  },

  computed: {
    ...mapState(["searchResultList"]),
  },
};
</script>
