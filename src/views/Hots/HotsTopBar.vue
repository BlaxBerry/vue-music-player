<template>
  <div
    class="text-sm-body-1 text-md-h6 font-weight-black d-flex justify-space-between align-center pb-2 px-md-6 px-lg-10"
  >
    <!-- count -->
    <div>
      <b>Musics</b>&nbsp;
      <b class="red--text text--darken-2">{{ count }}</b>
    </div>

    <!-- bts -->
    <div>
      <!-- clear -->
      <v-btn
        dark
        fab
        small
        color="red darken-2"
        class="mr-2"
        @click="overlay = !overlay"
        v-if="count"
      >
        <v-icon dark>
          mdi-trash-can-outline
        </v-icon>
      </v-btn>
      <!-- add -->
      <v-btn dark fab small color="primary" @click="$router.push('/search')">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>

    <!-- confirm mask -->
    <v-overlay :absolute="absolute" :value="overlay">
      <h1 class="my-10">
        Are you Sure to Clear
        <b class="red--text text--darken-2">All</b>
        ?
      </h1>
      <div class="d-flex justify-center">
        <v-btn
          class="mr-6"
          color="red darken-2"
          @click="confirm('No')"
          v-text="'No'"
        />
        <v-btn
          color="success darken-2"
          @click="confirm('Yes')"
          v-text="'Yes'"
        />
      </div>
    </v-overlay>
  </div>
</template>

<script>
export default {
  props: ["count"],

  data: () => ({
    absolute: true,
    opacity: 0,
    overlay: false,
  }),

  methods: {
    confirm(text) {
      this.overlay = false;
      if (text == "Yes") {
        localStorage.clear("musicplayer-songs-saved");
        this.$emit("onClearLocalStorageList", []);
      }
      if (text == "No") {
        return;
      }
    },
  },
};
</script>
