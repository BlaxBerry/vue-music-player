<template>
  <div>
    <!-- Search

    <v-btn @click="searchList">
      Block Button
    </v-btn> -->

    <v-icon
      large
      color="green darken-2"
    ></v-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQueryKeyword: "Sia",
    };
  },
  methods: {
    searchList() {},

 
  },

  created() {
    // 1.
    if (this.$route.query.keyword)
      this.searchQueryKeyword = this.$route.query.keyword;
    // 2.
    this.searchList();
  },
};
</script>
