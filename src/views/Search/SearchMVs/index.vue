<template>
  <div>
    <!-- {{ $store.state.searchResult.count }} -->
    <!-- card list -->
    <List id="common-scrollContent" />
  </div>
</template>

<script>
// components
import List from "./SearchMVList.vue";

export default {
  components: { List },
};
</script>

<style></style>
