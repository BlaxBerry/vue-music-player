<template>
  <v-row class="pa-2 pb-5">
    <v-col v-for="item in list" :key="item.id" cols="6" sm="4" md="3" lg="2">
      <v-card class="mx-auto" elevation="6" @click="click(item.id)">
        <v-img class="white--text align-end" :src="item.coverImgUrl">
          <!-- title -->
          <v-card-title class="font-weight-black">
            {{ item.name }}
          </v-card-title>
        </v-img>
        <!-- creator -->
        <v-card-subtitle
          class="pb-2 text-truncate text--primary font-weight-bold"
        >
          <v-avatar size="25" class="mr-1">
            <img :src="item.creator.avatarUrl" :alt="item.nickname" />
          </v-avatar>
          {{ item.creator.nickname }}
        </v-card-subtitle>
        <!-- playcount -->
        <v-card-text class="text-caption d-flex align-center">
          <v-icon small color="red lighten-2" class="mx-1">
            mdi-play-circle-outline
          </v-icon>
          {{ item.playCount }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    click(id) {
      this.$router.push("/detail/sheet?id=" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card__title {
  background-color: rgba(0, 0, 0, 0.5) !important;
  min-height: 100px !important;
}
</style>
