<template>
  <div>
    <!-- top -->
    <v-sheet class="pl-2 pa-sm-4">
      <v-tabs
        v-for="(value, key, index) in searchOptionItems"
        :key="index"
        class="text-caption text-sm-button d-flex align-center"
        color="red darken-2"
      >
        <v-tab
          color="red darken-2"
          v-for="(b, i) in value"
          :key="i"
          @click="changeSearchOption(index, b)"
        >
          {{ b }}
        </v-tab>
      </v-tabs>
    </v-sheet>

    <!-- list -->
    <CardList :list="search.list" v-if="search.list.length" />

    <!-- empty -->
    <Empty v-else />
  </div>
</template>

<script>
// items
import searchOptionItems from "@/assets/data/Buttons/MVsTypeBtns";
// api
import GetMVAll from "@/api/MVs/getMVs";
// components
import CardList from "./MVsList.vue";
import Empty from "@/components/Empty/index.vue";

export default {
  components: { CardList, Empty },
  data() {
    return {
      searchOptionItems,
      search: {
        area: "欧美",
        type: "官方版",
        order: "上升最快",
        page: 1,
        list: [],
        hasmore: true,
      },
    };
  },

  methods: {
    changeSearchOption(tabIndex, item) {
      console.log(tabIndex,item);
      switch (tabIndex) {
        case 0:
          this.search.area = item;
          break;
        case 1:
          this.search.type = item;
          break;
        case 2:
          this.search.order = item;
          break;
        default:
          break;
      }
      this.searchList();
    },
    async searchList() {
      this.search.list = [];
      let { area, type, order, page } = this.search;
      let res = await GetMVAll({
        area,
        type,
        order,
        limit: 30,
        offset: (page - 1) * 30,
      });
      console.log(res);
      this.search.list = res.data;
      this.search.hasmore = res.hasmore;
    },
  },

  created() {
    this.searchList();
  },
};
</script>

<style></style>
