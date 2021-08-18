<template>
  <div color="basil">
    <v-tabs v-model="tab" color="basil">
      <v-tab v-for="(item, index) in items" :key="index">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>lists</v-tab-item>
      <v-tab-item>sheets</v-tab-item>
      <v-tab-item>mvs</v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // tab change
      tab: null,
      items: ["Lists", "Sheets", "MVs"],
    };
  },
};
</script>

<style></style>
