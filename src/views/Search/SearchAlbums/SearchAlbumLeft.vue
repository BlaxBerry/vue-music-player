<template>
  <v-row class="ma-1">
    <v-col
      cols="6"
      md="4"
      class="pa-1"
      v-for="item in $store.state.searchResult.list.albums"
      :key="item.id"
    >
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card @click="check(item)">
            <v-img
              lazy-src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
              :src="item.coverImgUrl"
            ></v-img>

            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="black"
                class="justify-start justify-sm-center align-end align-sm-center"
              >
                <h3 class="d-sm-none pa-2 font-weight-black">
                  {{ item.name }}
                </h3>
                <v-btn rounded class="red darken-2" @click="goDetail(item.id)">
                  Check More
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    check(item) {
      // let { name, id, description, creator, playCount, tags, tracks, updateTime } = item;
      // creator = {
      //   nickname: creator.nickname,
      //   avatar: creator.avatarUrl,
      // };
      // let pic = item.coverImgUrl;
      // let params = { name, id, description, pic, creator, playCount, tags, tracks, updateTime };
      // this.$store.commit("saveAlbumSelected", params);
      this.$store.dispatch("getAlbumDetails", item.id);
    },
    goDetail(id) {
      this.$router.push("./album?id=" + id);
    },
  },
};
</script>

<style></style>
