<template>
  <v-tabs color="red darken-2">
    <v-tab>热门评论</v-tab>
    <v-tab>推荐视频</v-tab>

    <!-- comments -->
    <v-tab-item>
      <v-list three-line id="common-scrollContent">
        <v-list-item
          v-for="item in comments.comments"
          :key="item.id"
          class="pl-sm-0"
        >
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
    </v-tab-item>

    <!-- list -->
    <v-tab-item>
      <v-row id="common-scrollContent">
        <v-col
          cols="12"
          v-for="item in videoList"
          :key="item.id"
          style="position:relative"
        >
          <v-card @click="goMV(item.id)">
            <v-img :src="item.cover"></v-img>
          </v-card>
          <!-- mask -->
          <v-overlay
            absolute
            style="height:50%;top:50%;"
            class="justify-start pl-6"
          >
            <div>
              <h3>{{ item.name }}</h3>
              <h6>
                <span
                  v-for="a in detail.artists"
                  :key="a.id"
                  class="red--text text--darken-2 font-weight-blac mr-3"
                >
                  {{ a.name }}
                </span>
              </h6>
            </div>
          </v-overlay>
        </v-col>
      </v-row>
    </v-tab-item>
  </v-tabs>
</template>

<script>
// api

export default {
  props: ["detail", "comments", "videoList"],

  methods: {
    goMV(id) {
      this.$router.push("/mv?id=" + id);
      this.$router.go(0);
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
#common-scrollContent {
  height: 120vh !important;
}
</style>
