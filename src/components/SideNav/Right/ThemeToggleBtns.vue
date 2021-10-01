<template>
  <div class="my-2 mx-2">
    <div class="d-flex">
      <v-icon class="mr-1" size="20">mdi-theme-light-dark</v-icon>
      <h4>主题</h4>
    </div>
    <div class="py-2 d-flex justify-space-around">
      <v-btn
        v-for="item in themeBtns"
        :key="item.params"
        dark
        :color="isDarkTheme ? item.colorInDark : item.colorInLight"
        @click="toggleTheme(item.params)"
      >
        <v-icon>
          {{ item.icon }}
        </v-icon>
        &nbsp;{{ item.name }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isDarkTheme: true,
    themeBtns: [
      {
        name: "Dark",
        colorInDark: "red darken-2",
        colorInLight: "",
        icon: "mdi-weather-night",
        params: true,
      },
      {
        name: "Light",
        colorInDark: "",
        colorInLight: "red darken-2",
        icon: "mdi-weather-sunny",
        params: false,
      },
    ],
  }),

  methods: {
    toggleTheme(params) {
      this.$vuetify.theme.dark = params;
      this.isDarkTheme = params;
    },
  },
};
</script>

<style></style>
