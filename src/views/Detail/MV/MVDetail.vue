<template>
  <v-row>
    <!-- left main -->
    <v-col cols="12" md="9">
      <video :src="MVURL" controls></video>

      <!-- recommend bottom -->
      <div class="d-md-none"></div>
    </v-col>

    <!-- right recommend list -->
    <v-col class="d-none d-md-flex" md="3">2</v-col>
  </v-row>
</template>

<script>
// api
import { GetMVURL } from "@/api/mvURL.js";
import { GetMVRecommend } from "@/api/mvRecommend.js";

export default {
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
