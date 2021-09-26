<template>
  <v-navigation-drawer
    dark
    absolute
    temporary
    v-model="$store.state.appShowSideNav"
  >
    <v-list nav>
      <v-list-item-group>
        <!-- top title -->
        <v-list-item class="py-2">
          <v-img
            :src="require('../../assets/images/logo.png')"
            max-width="50"
          />
          <v-list-item-title
            class="text-h6 pl-4"
            v-html="'Music Player <small>2.0</small>'"
          />
        </v-list-item>

        <v-divider></v-divider>

        <!-- items -->
        <v-list-item
          class="pl-6"
          v-for="item in sideNavItems"
          :key="item.name"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="item.name" />
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    sideNavItems: [
      { name: "Hot Recommend", icon: "mdi-home", to: "/hots" },
      { name: "Search", icon: "mdi-magnify", to: "/search" },
      { name: "Songs", icon: "mdi-playlist-music", to: "/songs" },
      { name: "MVs", icon: "mdi-movie-open", to: "/mvs" },
      { name: "Albums", icon: "mdi-music-box-multiple", to: "/albums" },
    ],
  }),
};
</script>

<style></style>
