<template>
  <div>
    Mvs
  </div>
</template>

<script>
export default {
  data() {
    return {
      favouriteList: [],
    };
  },
  created() {
    let list = JSON.parse(localStorage.getItem("MusicPlayer-Favourites-MVs"));
    if (list) this.favouriteList = list;
    // console.log(this.favouriteList);
  },
};
</script>

<style></style>
