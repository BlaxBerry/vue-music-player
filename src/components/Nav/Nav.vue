<template>
  <!-- topNav + leftNavDrawer -->
  <div class="py-5">
    <!-- top Nav -->
    <v-app-bar dark dense fixed>
      <v-app-bar-nav-icon @click="drawer = true" />
      <v-text-field
        v-model="val"
        rounded
        filled
        clearable
        prepend-inner-icon="mdi-magnify"
        class="mt-7 ml-2"
        @keydown.enter="search"
      />
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
      fixed
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

    <!-- alert bar -->
    <v-snackbar
      v-model="alert"
      fixed
      top
      centered
      rounded="pill"
      color="red lighten-1"
      timeout="2000"
    >
      Cannot search an empty !
      <template v-slot:action="{ attrs }">
        <v-btn icon color="white" text v-bind="attrs" @click="alert = false">
          <v-icon dark>
            mdi-close
          </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // input search value
      val: "",
      // show alert bar
      alert: false,
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
  methods: {
    search() {
      if (this.val.trim() == "") {
        this.alert = true;
      } else {
        console.log(this.val);
        this.$router.push("/search?q=" + this.val);
        this.$router.go(0);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  top: -20px;
}
.v-app-bar {
  overflow: hidden;
}
</style>
