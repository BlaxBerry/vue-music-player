<template>
  <v-footer dark padless class="grey--text">
    <v-card flat tile class="white--text text-center" min-width="100vw">
      <v-card-text v-if="$route.name == 'About'">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          plain
        >
          <v-icon size="25px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0" v-if="$route.name == 'About'">
        front end project web appliaction of music player for personal use only.
        <br />
        Data requested from free online API
        <a href="https://autumnfish.cn">https://autumnfish.cn</a>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        Vue-Music-Player
        <strong class="white--text"> 2.0 </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-github", "mdi-account"],
  }),
};
</script>

<style></style>
