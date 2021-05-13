<template>
  <div class="home">
    
    <TopNavBar/>
    Hello
  </div>
</template>

<script>
// @ is an alias to /src
//TopNavBar
import TopNavBar from "@/components/TopNavBar/TopNavBar.vue";

export default {
  name: "Home",
  components: {
    TopNavBar,
  },
};
</script>
