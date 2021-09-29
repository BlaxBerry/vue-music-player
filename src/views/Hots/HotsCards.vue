<template>
  <v-row>
    <v-col
      v-for="(item, index) in songList"
      :key="index"
      cols="6"
      sm="4"
      md="3"
      lg="2"
    >
      <v-card @click="playSong(item)">
        <v-img :src="item.pic" max-width="350" />
        <!-- name -->
        <v-card-title
          class="text-body-1 text-lg-h6 font-weight-black"
          v-text="item.name"
        />
        <!-- album -->
        <v-card-subtitle
          class="text-body-2 text-lg-body-1 grey--text"
          v-text="item.album"
        />
        <!-- artists -->
        <v-card-subtitle class="artists text-h6 pt-0">
          <span
            v-for="(item, index) in item.artists"
            :key="index"
            class="text-caption text-md-body-2 red--text text--darken-2 mr-3"
            v-text="item.name"
          />
        </v-card-subtitle>

        <!-- mask overlay -->
        <v-fade-transition>
          <v-overlay
            v-if="overlayShow == item.id"
            absolute
            color="grey"
            z-index="0"
          >
            <v-img
              class="gif-playing"
              :src="require('../../assets/images/playing.gif')"
            />
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["songList"],

  data() {
    return {
      overlayShow: null,
    };
  },

  methods: {
    playSong(item) {
      this.overlayShow = item.id;
      this.$store.dispatch("getSongUrl", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  height: 100%;
}
.v-card__subtitle {
  line-height: 1rem;
}
</style>
