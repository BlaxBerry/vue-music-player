<template>
  <v-row class="ma-1 px-md-6 px-lg-10">
    <v-col
      cols="12"
      md="6"
      v-for="item in favouriteList"
      :key="item.id"
      class="pa-1"
    >
      <v-card
        dark
        class="common-hot-card d-flex pr-4 pr-md-6 pr-lg-8"
        @click="play(item)"
        elevation="6"
      >
        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="item.pic"></v-img>
        </v-avatar>

        <v-list dense class="transparent" style="flex:1;overflow:hidden">
          <v-list-item-group>
            <v-list-item-content class="pt-4">
              <!-- name -->
              <v-list-item-title
                class="text-body-1 font-weight-black"
                v-html="item.name"
              />
              <!-- album name  -->
              <v-list-item-subtitle
                class="text-caption font-weight-black py-1"
                v-html="item.album.name"
              />
              <!-- artists name -->
              <v-list-item-subtitle>
                <span
                  v-for="a in item.artists"
                  :key="a.id"
                  class="text-caption font-weight-black mr-3"
                  v-html="a.name"
                />
              </v-list-item-subtitle>
              <!-- tools -->
              <div class="d-flex align-center justify-space-between mt-1">
                <!-- btns -->
                <v-chip
                  dark
                  x-small
                  color="yellow darken-2"
                  v-if="item.fee == true"
                >
                  MVP
                </v-chip>
              </div>
            </v-list-item-content>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import "../../../utils/filters/formatTime";

export default {
  data() {
    return {
      favouriteList: [],
    };
  },
  created() {
    let list = JSON.parse(localStorage.getItem("MusicPlayer-Favourites-Songs"));
    if (list) this.favouriteList = list;
  },
  methods: {
    play(item) {
      this.$store.commit("saveSongSelected", item);
    },
  },
};
</script>
