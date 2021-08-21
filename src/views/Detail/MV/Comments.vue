<template>
  <div v-if="list.hotComments">
    <v-card-title
      v-if="list.hotComments.length != 0"
      class="pb-0 font-weight-black"
    >
      Hot Comments
      <span v-if="list.hotComments">({{ list.hotComments.length }})</span>
    </v-card-title>
    <!-- {{ list.hotComments.length }} -->
    <v-list three-line class="pt-0">
      <v-list-item v-for="(item, index) in list.hotComments" :key="index">
        <v-list-item-content>
          <!-- 1. avatar + name -->
          <v-list-item-subtitle class="text-caption">
            <v-avatar size="30" class="mr-2">
              <v-img :src="item.user.avatarUrl"></v-img>
            </v-avatar>
            {{ item.user.nickname }}
          </v-list-item-subtitle>
          <!-- 2. contnet -->
          <p class="text-body-2 py-1" v-text="item.content" />
          <!-- 3. like count  -->
          <v-list-item-subtitle class="text-caption d-flex align-center">
            {{ handleTime(item.time) }}
            <v-icon small class="ml-2 mr-1">mdi-thumb-up</v-icon>
            {{ item.likedCount }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- {{ list.newComments.length }} -->
  </div>
</template>

<script>
export default {
  props: ["list"],

  methods: {
    handleTime(time) {
      let date = new Date(time);
      let y = date.getFullYear();
      let mon = date.getMonth() + 1;
      let d = date.getDate();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      mon = mon < 10 ? "0" + mon : mon;
      d = d < 10 ? "0" + d : d;
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      return y + "-" + mon + "-" + d + " " + h + ":" + m + ":" + s;
    },
  },
};
</script>

<style lang="scss" scoped></style>
