<template>
  <v-list class="common-scroll-list comments-list">
    <v-list-item v-for="item in songSelected.comments" :key="item.id">
      <v-list-item-content>
        <v-list-item-title v-text="item.content" />
        <v-list-item-title v-text="item.user.nickname" />
      </v-list-item-content>

      <v-list-item-avatar>
        <v-img :src="item.user.avatarUrl"></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
    props:[]
};
</script>

<style></style>
