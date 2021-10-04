<template>
  <v-sheet v-if="detail" class="px-4">
    <!-- 1. name -->
    <v-card-title class="font-weight-black pb-0">
      {{ detail.name }}
    </v-card-title>

    <!-- 2. video -->
    <!-- <img :src="detail.cover" alt="" /> -->
    <video
      :src="url"
      :poster="detail.cover"
      controls
      style="width:100%"
    ></video>

    <!-- artist -->
    <span
      v-for="a in detail.artists"
      :key="a.id"
      class="pl-4 red--text text--darken-2 font-weight-black"
    >
      {{ a.name }}
    </span>
    <!-- <v-tabs color="red darken-2">
      <v-tab v-for="a in detail.artists" :key="a.id">{{ a.name }} </v-tab>
      <v-tab-item class="pa-4" v-for="a in detail.artists" :key="a.id">
        <div>
          {{ a.name }}
        </div>
      </v-tab-item>
    </v-tabs> -->

    <!-- count -->
    <div v-if="detail" class="text-caption pl-4 font-weight-black">
      <span class="mr-4"> 发布时间: {{ detail.publishTime }} </span>
      <span> 播放次数: {{ detail.playCount }} </span>
    </div>

    <!-- comments -->
    <div class="d-none d-sm-block">
      <v-card-title class="pb-2">评论</v-card-title>
      <v-list three-line id="common-scrollContent" class="pt-0">
        <v-list-item v-for="item in comments.hotComments" :key="item.id">
          <!-- pic -->
          <v-list-item-avatar>
            <v-img
              :lazy-src="require('../../../assets/images/logo.png')"
              :src="item.user.avatarUrl"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              class="red--text text--darken-2"
              v-html="item.user.nickname"
            />
            <p class="text-caption mb-0" v-html="item.content" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-sheet>
</template>

<script>
// api
// import getArtistsInfo from "@/api/Detail/Arists/getArtistsInfo";
import GetMVURL from "@/api/Detail/MV/mvURL";

export default {
  props: ["detail", "comments"],
  data() {
    return {
      url: "",
    };
  },
  methods: {
    async getMVURL() {
      let { data } = await GetMVURL({ id: this.$route.query.id });
      this.url = data.url;
    },
  },
  created() {
    this.getMVURL();
  },
};
</script>

<style lang="scss" scoped>
#common-scrollContent {
  height: 50vh !important;
}
</style>
