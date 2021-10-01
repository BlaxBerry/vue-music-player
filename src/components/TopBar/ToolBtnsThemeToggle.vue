<template>
  <div>
    <v-icon>
      {{ isDarkTheme ? "mdi-weather-night" : "mdi-weather-sunny" }}
    </v-icon>
    <v-switch
      v-model="$vuetify.theme.dark"
      inset
      color="red darken-2"
      persistent-hint
      class="theme-changer mt-6 ml-2 mr-md-4"
      @change="toggleTheme"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkTheme: true,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.$vuetify.theme.dark = this.isDarkTheme;
    }
  },
};
</script>

