<template>
  <v-row class="pa-2 pb-5">
    <v-col v-for="item in list" :key="item.id" cols="12" sm="6" md="4" lg="3">
      <v-card
        class="mx-auto"
        max-width="400"
        elevation="6"
        @click="click(item.id)"
      >
        <v-img max-height="250" class="white--text align-end" :src="item.cover">
          <div class="title-info">
            <!-- name -->
            <v-card-title v-text="item.name" />
            <!-- artist -->
            <v-card-subtitle class="pb-1" v-text="item.artistName" />
            <v-card-text class="d-flex align-center red--text text--lighten-2">
              <!-- playCount -->
              <v-icon color="red lighten-2" class="mr-1">
                mdi-play-circle-outline
              </v-icon>
              {{ item.playCount }}
              <!-- time -->
              <v-icon color="red lighten-2" class="ml-4 mr-1">
                mdi-clock-outline
              </v-icon>
              {{ item.duration }}
            </v-card-text>
          </div>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["list"],

  methods: {
    click(id) {
        this.$router.push("/detail/mv?id=" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.title-info {
  background-color: rgba(0, 0, 0, 0.5) !important;
  min-height: 100px !important;
}
</style>
