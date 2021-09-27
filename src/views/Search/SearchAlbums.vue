<template>
  <v-row>
    <v-col v-for="i in 6" :key="i" cols="6" md="3" lg="2" class="pa-1">
      <v-img
        :src="`https://picsum.photos/500/300?image=${i * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
        aspect-ratio="1"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
