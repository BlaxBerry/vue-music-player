<template>
  <div class="mx-2">
    <v-row v-if="$store.getters.searchResultSongList.length">
      <v-col cols="12" sm="7" id="common-scrollContent">
        <LeftList />
      </v-col>
      <v-col class="d-none d-sm-flex justify-center" cols="5">
        <RightDetail />
      </v-col>
    </v-row>

    <!-- empty -->
    <v-row v-else>
      <v-col cols="12">
        <Empty />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// components
import LeftList from "./SearchSongsLeft.vue";
import RightDetail from "./SearchSongsRight.vue";
import Empty from "../../../components/Empty/index.vue";

export default {
  components: { LeftList, RightDetail, Empty },
};
</script>

<style></style>
