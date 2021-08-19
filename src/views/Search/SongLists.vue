<template>
  <v-list three-line height="80%">
    <v-list-item v-for="item in list" :key="item.id" @click="play(item.id)">
      <!-- avatar -->
      <v-list-item-avatar>
        <!-- <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img> -->
      </v-list-item-avatar>
      <!-- name -->
      <v-list-item-content class="py-5">
        <v-list-item-title>
          {{ item.name }}
          <v-icon v-if="item.mvid != 0" color="red" small>
            mdi-play-box-outline
          </v-icon>
        </v-list-item-title>
        <v-list-item-subtitle
          v-html="item.artists[0].name"
          class="red--text text--lighten-2"
        />
      </v-list-item-content>
      <!-- time -->
      <v-list-item-icon>
        <v-list-item-subtitle v-html="item.duration" />
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ["list"],

  methods: {
    play(id) {
      console.log(id);
    },
  },
};
</script>

<style></style>
