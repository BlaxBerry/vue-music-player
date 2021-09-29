<template>
  <v-footer
    padless
    app
    class="justify-center"
    v-if="$store.state.appShowFooterPlayer"
  >
    <aplayer
      :music="music"
      repeat="repeat-on"
      autoplay
      class="pa-2 px-md-6 px-lg-10"
    />
  </v-footer>
</template>

<script>
import { mapState } from "vuex";
import Aplayer from "vue-aplayer";
Aplayer.disableVersionBadge = true;

export default {
  components: { Aplayer },

  data() {
    return {
      music: {},
    };
  },

  computed: {
    ...mapState(["songSelected"]),
  },

  watch: {
    songSelected: function(newVal) {
      let { name, artists, pic, url } = newVal;
      let artistsArr = artists.map((item) => item.name);
      let artistsStr = "";
      artistsArr.forEach((item) => (artistsStr += item + " "));
      this.music = {
        title: name,
        artist: artistsStr,
        src: url,
        pic,
        theme: "#D32F2F",
      };
    },
  },
};
</script>

<style lang="scss">
.aplayer {
  background-color: transparent !important;
  width: 100% !important;
  .aplayer-info {
    .aplayer-title {
      color: #d32f2f;
      font-weight: 700;
    }
    .aplayer-author {
      color: #9e9e9e;
    }
  }
  .aplayer-controller {
    margin-bottom: 0.5rem;
    .aplayer-ptime {
      color: #d32f2f;
    }
  }
}
</style>
