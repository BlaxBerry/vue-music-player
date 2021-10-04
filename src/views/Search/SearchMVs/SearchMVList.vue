<template>
  <v-row>
    <v-col
      cols="6"
      sm="4"
      md="3"
      v-for="item in $store.state.searchResult.list.mvs"
      :key="item.id"
    >
      <v-hover style="height:100%">
        <template v-slot:default="{ hover }">
          <v-card class="mx-auto" max-width="344">
            <!-- pic -->
            <v-img :src="item.cover" />
            <!-- info -->
            <v-list-item three-line>
              <v-list-item-content>
                <!-- name -->
                <v-list-item-title class="text-body-1 text-sm-h6 mb-1">
                  {{ item.name }}
                </v-list-item-title>
                <!-- artist -->
                <v-list-item-subtitle>
                  <span
                    v-for="a in item.artists"
                    :key="a.id"
                    class="text-body-2 text-sm-body-1 red--text text--darken-2 mr-3"
                    v-html="a.name"
                  />
                </v-list-item-subtitle>
                <v-list-item-subtitle class="grey--text text-caption">
                  {{ item.playCount }} Plays
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="grey" style="z-index:1">
                <v-btn @click="goCheckMV(item.id)">
                  <v-icon color="red darken-2">mdi-play-box</v-icon>
                  Check Video
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    overlay: false,
  }),

  methods: {
    goCheckMV(id) {
      this.$router.push("/mv?id=" + id);
    },
  },
};
</script>

<style></style>
