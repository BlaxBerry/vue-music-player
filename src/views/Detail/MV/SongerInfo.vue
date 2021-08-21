<template>
  <div>
    <v-card-subtitle class="pb-1 font-weight-bold">
      <v-avatar v-if="artist.picUrl" class="mr-2">
        <img :src="artist.picUrl" :alt="artist.name" />
      </v-avatar>
      {{ artist.name }}
      <small v-if="artist.trans" class="ml-1"> ({{ artist.trans }} ) </small>
    </v-card-subtitle>
    <v-card-subtitle class="text-caption py-0">
      {{ artist.briefDesc }}
    </v-card-subtitle>
    <!-- <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in artists" :key="item.id">
        <v-avatar>
          <img :src="item.artist.picUrl" :alt="item.artist.name" />
        </v-avatar>
        {{ item.artist.name }}0000
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
    </v-tabs-items> -->
  </div>
</template>

<script>
export default {
  props: ["artist"],
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style></style>
