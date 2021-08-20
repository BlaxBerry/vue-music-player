<template>
  <v-row>
    <!-- left main -->
    <v-col cols="12" md="9" class="pt-4">
      <video :src="MVURL" controls></video>

      <!-- recommend bottom -->
      <v-row class="d-md-none d-flex align-center pa-2">
        <v-col cols="6" class="pa-1" v-for="item in MVRecommendList" :key="item.id">
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
// components
import RecommendList from "./RecommendList.vue";

export default {
  components: {
    RecommendList,
  },

  data() {
    return {
      MVURL: "",
      MVRecommendList: [],
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

      // get recommend mv
      GetMVRecommend({
        mvid: this.$route.query.id,
      }).then((res) => {
        this.MVRecommendList = res.data.mvs;
        console.log(this.MVRecommendList);
      });
    },
  },

  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped></style>
