<template>
  <v-card
    v-if="sheet.creator"
    dark
    class="d-flex flex-column flex-md-row justify-md-start align-md-center pa-2 mb-2"
  >
    <!-- cover pic -->
    <v-avatar class="ma-3 d-none d-md-flex" size="200" tile>
      <v-img :src="sheet.coverImgUrl" />
    </v-avatar>
    <!-- desc -->
    <div v-if="sheet.creator">
      <!-- name -->
      <v-card-title>歌单名：{{ sheet.name }}</v-card-title>
      <!-- tags -->
      <v-card-subtitle class="py-2">
        <v-chip
          v-for="(item, index) in sheet.tags"
          :key="index"
          v-text="item"
          color="red"
          x-small
          class="mr-1 font-weight-bold"
        />
      </v-card-subtitle>
      <!-- desc -->
      <v-card-text
        v-text="sheet.description"
        max-height="50"
        class="pb-0 pt-2"
      />
      <!-- creator + playcount-->
      <v-card-subtitle class="d-flex align-center justify-space-between">
        <div>
          <b> 歌单创建者：</b>
          <v-avatar size="30" class="mr-2">
            <v-img :src="sheet.creator.avatarUrl" />
          </v-avatar>
          <span v-text="sheet.creator.nickname" />
        </div>
        <div class="ml-7">
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading" v-text="sheet.playCount" />
        </div>
      </v-card-subtitle>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["sheet"],
  mounted() {
    console.log(this.sheet);
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
