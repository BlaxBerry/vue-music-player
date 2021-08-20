<template>
  <v-card
    class="d-flex align-center my-md-2 pa-0"
    elevation="6"
    @click="click(item.id)"
  >
    <!-- lg screen samll img -->
    <v-img
      class="d-none d-lg-flex mr-2 align-end red--text text--lighten-2"
      :src="item.cover"
      height="100"
      max-width="150"
    >
      <div class="title d-flex align-center text-body-2 pl-2">
        <!-- playCount -->
        <v-icon small color="red lighten-2" class="mr-1">
          mdi-play-circle-outline
        </v-icon>
        {{ item.playCount }}
      </div>
    </v-img>

    <!-- md screen big template img -->
    <v-img
      class="d-md-flex d-lg-none white--text align-end"
      :src="item.cover"
      height="150"
    >
      <div class="title pa-2">
        <v-card-subtitle class="pa-0 text-body-1 font-weight-black">
          {{ item.name }}
        </v-card-subtitle>
        <v-card-subtitle
          class="pa-0 pt-01 text-body-2 red--text text--lighten-2"
        >
          {{ item.artistName }}
        </v-card-subtitle>
      </div>
    </v-img>

    <!-- lg screen info desc -->
    <div class="pa-0 d-none d-lg-block text-break">
      <p class="text-subtitle-2 font-weight-bold ma-0 py-1">
        {{ item.name }}
      </p>
      <p
        v-for="artist in item.artists"
        :key="artist.id"
        class="text-caption ma-0 ml-1"
      >
        {{ artist.name }}
        <!-- <small
            v-if="artist.transNames"
            class="font-weight-light"
          >
            ({{ artist.transNames[0] }})
          </small> -->
      </p>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    click(id) {
      this.$router.push("/detail/mv?id=" + id);
      this.$router.go(0);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
  .title {
    background-color: rgba(0, 0, 0, 0.5) !important;
    min-height: 30px !important;
  }
  .v-img {
    width: 100% !important;
  }
}
</style>
