<template>
  <v-row>
    <!-- left main -->
    <v-col cols="12" md="9" class="pt-4">
      <!-- video -->
      <video :src="MVURL" controls></video>
      <!-- MV Desc -->
      <MVDesc :MV="MVDetail" :artist="artist"/>

      <!-- recommend bottom -->
      <v-row class="d-md-none d-flex align-center pa-2">
        <v-col
          cols="6"
          class="pa-1"
          v-for="item in MVRecommendList"
          :key="item.id"
        >
          <RecommendList :item="item" />
        </v-col>
      </v-row>
    </v-col>

    <!-- right recommend list -->
    <v-col class="d-none d-md-flex pl-0 flex-column align-center" md="3">
      <RecommendList
        v-for="item in MVRecommendList"
        :key="item.id"
        :item="item"
      />
    </v-col>
  </v-row>
</template>

<script>
// api
import { GetMVURL } from "@/api/mvURL.js";
import { GetMVRecommend } from "@/api/mvRecommend.js";
import { GetMVDetail } from "@/api/mvDetail.js";
import { GetArtistInfo } from "@/api/mvArtistInfo.js";
// components
import RecommendList from "./RecommendList.vue";
import MVDesc from "./Desc.vue";

export default {
  components: {
    RecommendList,
    MVDesc,
  },

  data() {
    return {
      MVURL: "",
      MVRecommendList: [],
      MVDetail: {},
      //   artists: [],
      artist: {},
    };
  },

  methods: {
    init() {
      // get mv url
      GetMVURL({
        id: this.$route.query.id,
      }).then((res) => {
        this.MVURL = res.data.data.url;
        // console.log(this.MVURL);
      });

      // get recommend MV list
      GetMVRecommend({
        mvid: this.$route.query.id,
      }).then((res) => {
        this.MVRecommendList = res.data.mvs;
        // console.log(this.MVRecommendList);
      });

      // get MV Ddtail
      GetMVDetail({
        mvid: this.$route.query.id,
      }).then((res) => {
        this.MVDetail = res.data.data;
        console.log(this.MVDetail);
        GetArtistInfo({
          id: this.MVDetail.artistId,
        }).then((result) => {
          this.artist = result.data.artist;
        });

        // this.MVDetail 
        // for (let i = 0; i < res.data.data.artists.length; i++) {
        //   // get artist info
        //   GetArtistInfo({
        //     id: res.data.data.artists[i].id,
        //   }).then((result) => {
        //     res.data.data.artists[i] = result.data;
        //   });
        // }
        // this.artists = res.data.data.artists;
      });
    },
  },

  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped></style>
