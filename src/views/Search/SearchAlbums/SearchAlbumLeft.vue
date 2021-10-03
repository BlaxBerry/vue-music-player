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
          <v-card @click="checkRightList(item)">
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
                <h4 class="pa-2 font-weight-black">
                  {{ item.name }}
                </h4>
                <v-btn
                  rounded
                  class="d-sm-none red darken-2"
                  @click="goDetail(item.id)"
                >
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
    checkRightList(item) {
      this.$store.dispatch("getAlbumDetails", item.id);
    },
    goDetail(id) {
      this.$router.push("./album?id=" + id);
    },
  },
};
</script>

<style></style>
