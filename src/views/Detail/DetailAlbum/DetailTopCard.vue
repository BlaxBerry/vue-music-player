<template>
  <v-card
    dark
    class="mx-auto common-hot-card align-center pa-4 pt-2"
    v-if="info.pic"
  >
    <!-- title -->
    <v-card-subtitle class="pa-0">专辑</v-card-subtitle>
    <v-card-title class="font-weight-black text-sm-h5 pa-0 pb-sm-4">
      {{ info.name }}
    </v-card-title>
    <div class="d-flex">
      <!-- left pic -->
      <div class="d-none d-sm-flex">
        <img :src="info.pic" style="width:200px;height:200px" />
      </div>
      <!-- right info -->
      <div class="text-overline px-sm-4">
        <!-- count -->
        <p class="mb-0 d-none d-sm-flex">
          <span class="mr-10">playCoun: {{ info.playCount }}</span>
          <span>ShareCount: {{ info.shareCount }}</span>
        </p>

        <!-- subscribers -->
        <!-- <p>
          <v-avatar
            v-for="s in info.subscribers"
            :key="s.userId"
            size="30"
            class="mr-1"
          >
            <img :src="s.avatarUrl" />
          </v-avatar>
        </p> -->
        <!-- tags -->
        <p class="mb-0 mb-sm-4">
          <v-chip
            v-for="item in info.tags"
            :key="item.id"
            class="mr-2"
            x-small
            color="teal"
            v-text="item"
          />
        </p>
        <!-- decription -->
        <p class="mb-0">
          {{ showMoreDetail ? info.description : smallDescription + "..." }}
          <v-btn
            x-small
            rounded
            color="primary"
            @click="showMoreDetail = !showMoreDetail"
          >
            {{ showMoreDetail ? "收起" : "查看更多" }}
          </v-btn>
        </p>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      showMoreDetail: false,
    };
  },
  computed: {
    smallDescription: function() {
      if (!this.info.description) return;
      return this.info.description.substr(0, 20);
    },
  },
};
</script>
