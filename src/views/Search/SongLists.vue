<template>
  <v-list three-line height="80%">
    <v-list-item v-for="item in list" :key="item.id" @click="play(item.id)">
      <!-- avatar -->
      <v-list-item-avatar v-if="item.pic" tile size="50" class="mt-5">
        <v-img :src="item.pic" :alt="item.name" />
      </v-list-item-avatar>
      <v-list-item-avatar v-if="item.al" tile size="50" class="mt-5">
        <v-img :src="item.al.picUrl" :alt="item.name" />
      </v-list-item-avatar>
      <!-- name -->
      <v-list-item-content class="py-5">
        <b class="text-truncate">
          <v-list-item-title>
            {{ item.name }}
            <v-chip
              v-if="item.copyrightId && item.copyrightId != 0"
              x-small
              color="orange"
              text-color="white"
              class="mx-1"
              >MVP
            </v-chip>
          </v-list-item-title>
          <v-list-item-subtitle
            v-html="item.artists ? item.artists[0].name : item.ar[0].name"
            class="red--text text--lighten-2 pt-1"
          />
        </b>
      </v-list-item-content>
      <!-- time -->
      <v-list-item-icon>
        <v-list-item-subtitle class="mt-5" v-html="item.duration" />
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ["list"],

  data() {
    return {
      song: {
        name: "",
        album: [],
        url: "",
        pic: "",
        artist: "",
      },
    };
  },

  methods: {
    play(id) {
       this.$store.dispatch('getSongSelected',id)
    },
  },
};
</script>

<style></style>
