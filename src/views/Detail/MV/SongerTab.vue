<template>
  <div v-if="list.item">
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in list" :key="item.id">
        <v-avatar>
          <img :src="item.artist.picUrl" :alt="item.artist.name" />
        </v-avatar>
        {{ item.artist.name }}
        <small v-if="item.artist.trans"> ({{ item.artist.trans }} )</small>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in list" :key="item.id">
        <v-card color="basil" flat>
          <v-card-text>
            {{ item.artist.briefDesc }}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style></style>
