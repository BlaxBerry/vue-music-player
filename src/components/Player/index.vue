<template>
  <aplayer
    v-if="songSelected.url"
    class="px-md-6 px-lg-10"
    :music="{
      title: songSelected.name,
      src: songSelected.url,
      pic: songSelected.pic,
      artist: songSelected.artists.map((e) => e.name).join(' & '),
      theme: '#D32F2F',
    }"
    repeat="repeat-on"
    :mutex="false"
    :autoplay="true"
  />
</template>

<script>
import { mapGetters } from "vuex";
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
    ...mapGetters(["songSelected", "searchResultSongList"]),
  },

  // watch: {
  //   songSelected: function(newVal) {
  //     let { name, pic, url } = newVal;
  //     let artist = newVal.artists.map((item) => item.name + "").join(' & ');
  //     this.music = {
  //       title: name,
  //       src: url,
  //       pic,
  //       artist,
  //       theme: "#D32F2F",
  //     };
  //     this.music = newVal;
  //   },
  //   immediate: true,
  // },
  // created() {
  //   // this.music = this.searchResultSongList[0];
  //   let { name, pic, url } = this.searchResultSongList[0];
  //   let artist = this.searchResultSongList[0].artists.map((item) => item.name + "").toString();
  //   this.music = {
  //     title: name,
  //     src: url,
  //     pic,
  //     artist,
  //     theme: "#D32F2F",
  //   };
  // },
};
</script>
