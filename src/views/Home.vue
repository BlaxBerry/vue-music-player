<template>
  <div id="home">
    <Swipe />
    home
  </div>
</template>

<script>
// @ is an alias to /src
//Top Nav Bar
import Swipe from "@/components/Swipe/Swipe.vue";

export default {
  name: "Home",
  components: {
    Swipe,
  },
};
</script>

<style lang="less" scoped>
#home {
  padding-top: 1rem;
  padding-left: 7rem + 2rem;
  padding-right: 1rem;
}
</style>
