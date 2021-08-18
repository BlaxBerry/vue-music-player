<template>
  <!-- topNav + leftNavDrawer -->
  <div>
    <!-- top Nav -->
    <v-app-bar dark dense>
      <v-app-bar-nav-icon @click="drawer = true" />
      <v-spacer></v-spacer>
      <v-btn
        v-for="(item, index) in routeBtns"
        :key="index"
        icon
        @click="$router.go(item.go)"
        class="mr-1"
        small
      >
        <v-icon size="25px">{{ item.icon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- left Nav Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      expand-on-hover
      width="150"
      dark
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="white--text text--accent-4"
        >
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-list-item
            v-for="(item, index) in navDrawerItems"
            :key="index"
            class="white--text"
            :to="item.go"
          >
            <v-list-item-icon>
              <v-icon class="white--text">
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">{{
              item.name
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // val: "",   input search value
      // route link btns
      routeBtns: [
        { icon: "mdi-arrow-left-thick", go: -1 },
        { icon: "mdi-arrow-right-thick", go: 1 },
      ],
      // nav drawer
      navDrawerItems: [
        { name: "Home", go: "/home", icon: "mdi-home" },
        { name: "Search", go: "/search", icon: "mdi-magnify" },
        { name: "Lists", go: "/lists", icon: "mdi-music-box-outline" },
        {
          name: "Sheets",
          go: "/sheets",
          icon: "mdi-music-box-multiple-outline",
        },
        { name: "MVs", go: "/mvs", icon: "mdi-play-box-outline" },
        { name: "About", go: "/about", icon: "mdi-information" },
      ],

      drawer: false,
      group: null,
    };
  },
};
</script>

<style></style>
