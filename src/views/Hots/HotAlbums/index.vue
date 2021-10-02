<template>
  <div>
    9
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
    let list = JSON.parse(localStorage.getItem("MusicPlayer-Favourites-Albums"));
    if (list) this.favouriteList = list;
    // console.log(this.favouriteList);
  },
};
</script>

<style></style>
