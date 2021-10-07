<template>
  <v-sheet v-if="detail" class="px-4">
    <!-- name -->
    <v-card-title class="pb-0">
      {{ detail.name }} &nbsp;
      <span
        v-for="a in detail.artists"
        :key="a.id"
        class="red--text text--darken-2 text-body-1 font-weight-black"
      >
        {{ a.name }}
      </span>
    </v-card-title>

    <!-- count -->
    <p
      v-if="detail"
      class="red--text text--darken-2 text-caption pl-4 font-weight-black"
    >
      <span class="mr-4"> 发布时间: {{ detail.publishTime }} </span>
      <span> 播放次数: {{ detail.playCount }} </span>
    </p>

    <!-- video -->
    <video
      :src="url"
      :poster="detail.cover"
      controls
      style="width:100%"
    ></video>

    <!-- desc -->
    <div class="pa-2 pa-sm-4 text-caption text-body-2">
      <p>{{ detail.briefDesc }}</p>
      <p>{{ detail.desc }}</p>
    </div>

    <!-- artist -->
    <!-- <p>
      <span
        v-for="a in detail.artists"
        :key="a.id"
        class="pl-4 red--text text--darken-2 font-weight-black"
      >
        {{ a.name }}
      </span>
    </p> -->

    <!-- comments -->
    <!-- <div class="d-none d-sm-block" v-if="detail">
      <v-card-title class="pb-2">评论</v-card-title>
      <v-list three-line id="common-scrollContent" class="pt-0">
        <v-list-item v-for="item in comments.hotComments" :key="item.id">
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
    </div> -->
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
  height: 20vh !important;
}
</style>
