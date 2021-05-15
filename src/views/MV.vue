<template>
  <!-- MV -->
  <div id="mv">
    <div class="tags">
      <!-- area -->
      <ul class="area">
        <li
          v-for="(item, index) in tags[0]"
          :key="index"
          :class="area == item ? 'active ' : ''"
          @click="clickToChangeArea(item)"
        >
          {{ item }}
        </li>
      </ul>
      <!-- type -->
      <ul class="type">
        <li
          v-for="(item, index) in tags[1]"
          :key="index"
          :class="type == item ? 'active ' : ''"
          @click="clickToChangeType(item)"
        >
          {{ item }}
        </li>
      </ul>
      <!-- order -->
      <ul class="order">
        <li
          v-for="(item, index) in tags[2]"
          :key="index"
          :class="order == item ? 'active ' : ''"
          @click="clickToChangeOrder(item)"
        >
          {{ item }}
        </li>
      </ul>

      <!-- empty -->
      <!-- <Empty v-if="list.length == 0"></Empty> -->
    </div>

    <!-- MV list -->
    <MVCard :list="list" v-if="list.length > 0" />
    <Empty v-if="list.length == 0" />

    <!-- pages -->
    <el-pagination
      background
      layout="prev, pager, next"
      :pager-count="5"
      :total="totalPages"
      :current-page="offset"
      style="margin-top: 3rem"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
// Empty
import Empty from "@/components/Empty/Empty.vue";
// Card
import MVCard from "@/components/Card/MVCard.vue";

// API
import {
  // MV
  GetMV,
} from "@/network/api.js";

export default {
  name: "MV",
  data() {
    return {
      tags: [
        // area 地区
        ["全部", "欧美", "日本", "韩国"],
        // type 种类
        ["官方版", "现场版", "原生", "网易出品"],
        // order 排序
        ["最新", "最热", "上升最快"],
      ],
      // 选中的tag
      tagSelected: "",

      // MV list
      list: [],
      // 地区
      area: "欧美",
      // 类型
      type: "官方版",
      // 排序
      order: "最新",
      // 页数
      offset: 1,
      // 显示个数
      limit: 20,

      // pages
      totalPages: 0,
    };
  },
  components: {
    MVCard,
    Empty,
  },
  created() {
    // 页面刷新时获取MV
    this.init();
  },
  methods: {
    // 封住获取 MV列表函数
    init() {
      GetMV({
        area: this.area,
        type: this.type,
        order: this.order,
        limit: this.limit,
        offset: (this.offset - 1) * this.limit,
      }).then((res) => {
        console.log("list", res);
        this.list = res.data;
        if (res.count) {
          this.totalPages = res.count;
        }
        console.log(this.totalPages);
      });
    },

    // 点击 tags
    clickToChangeArea(item) {
      this.area = item;
      this.offset = 1;
      this.init();
    },
    clickToChangeType(item) {
      this.type = item;
      this.offset = 1;
      this.init();
    },
    clickToChangeOrder(item) {
      this.order = item;
      this.offset = 1;
      this.init();
    },

    // chang page
    handleCurrentChange(page) {
      console.log(page);
      this.offset = page;
      this.init();
    },
  },
};
</script>

<style lang="less" scoped>
#mv {
  padding-top: 1rem;
  padding-left: 7rem;
  padding-right: 1rem;
  padding-bottom: 1rem;

  .tags {
    ul {
      display: flex;
      li {
        padding: 1rem;
        cursor: pointer;
      }
      .active {
        color: red;
      }
    }
  }
}
</style>
