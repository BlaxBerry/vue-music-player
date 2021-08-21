<template>
  <div>
    <!-- MV info -->
    <div class="mv">
      <!-- 1.  title -->
      <v-card-title class="text-h4 font-weight-bold">{{
        MV.name
      }}</v-card-title>

      <!-- 2. time + playcount -->
      <v-card-subtitle
        v-if="MV.publishTime && MV.playCount"
        class="ma-0 py-0 grey--text"
        >发布时间：
        <b class="mr-6">{{ MV.publishTime }}</b>
        播放次数：
        <b>{{ MV.playCount }}</b>
      </v-card-subtitle>

      <!-- 3. tags -->
      <v-card-subtitle v-if="MV.videoGroup" class="py-0 pt-2">
        <v-chip
          v-for="item in MV.videoGroup"
          :key="item.id"
          class="mr-2"
          color="red lighten-2"
          x-small
          text-color="white"
          >{{ item.name }}
        </v-chip>
      </v-card-subtitle>

      <!-- 4. songer info -->
      <MVSongerInfo :artist="artist" />

      <!-- 5. desc -->
      <v-card-text class="py-8">
        {{ MV.desc != "" ? MV.desc : "暂无MV详情..." }}
      </v-card-text>
    </div>
  </div>
</template>

<script>
// components
import MVSongerInfo from "./SongerInfo.vue";

export default {
  props: ["MV", "artist"],
  components: { MVSongerInfo },

  data() {
    return {
      songers: [],
    };
  },
};
</script>

<style></style>
