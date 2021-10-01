<template>
  <v-navigation-drawer
    v-model="$store.state.toolsHandlers.SlidNavagation.isShowMaskLeftSlide"
    fixed
    temporary
  >
    <Common />
  </v-navigation-drawer>
</template>

<script>
// componrnts
import Common from "../common.vue";
export default {
  components: { Common },
};
</script>
