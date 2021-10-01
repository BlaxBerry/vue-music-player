<template>
  <aplayer
    class="pa-2 px-md-6 px-lg-10"
    :music="music"
    repeat="repeat-on"
    :mutex="false"
    autoplay
  />
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
