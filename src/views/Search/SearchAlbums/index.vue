<template>
  <div>
    <!-- {{ $store.state.searchResult.count }} -->
    <v-row v-if="$store.state.searchResult.list.albums.length">
      <v-col cols="12" sm="6" id="common-scrollContent">
        <LeftCards />
      </v-col>
      <v-col class="d-none d-sm-block" cols="6">
        <RightList />
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
import LeftCards from "./SearchAlbumLeft.vue";
import RightList from "./SearchAlbumsRight.vue";
import Empty from "../../../components/Empty/index.vue";

export default {
  components: { LeftCards, RightList, Empty },
};
</script>

<style></style>
