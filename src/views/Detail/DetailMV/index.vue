<template>
  <v-sheet style="padding-bottom:0px">
    <v-row class="pt-3">
      <!-- left video-->
      <v-col cols="12" sm="8" class="px-sm-0 py-0">
        <Left :detail="details" :comments="comments" />
      </v-col>
      <!-- right comment + videoes -->
      <v-col cols="12" sm="4" class="py-0 pr-4">
        <Right :detail="details" :comments="comments" :videoList="videoList" />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
// api
import getMVInfoDetail from "@/api/Detail/MV/mvDetail";
import getMVComments from "@/api/Detail/MV/mvComments";
import getMVRecommend from "../../../api/Detail/MV/mvRecommend";

// components
import Left from "./DetailMVLeft.vue";
import Right from "./DetailMVRight.vue";

export default {
  components: { Left, Right },
  data() {
    return {
      details: {},
      comments: {},
      videoList: [],
    };
  },

  methods: {
    init() {
      this.getMVDetail();
      this.getComments();
      this.getVideoList();
    },
    // get main detail
    async getMVDetail() {
      let { data } = await getMVInfoDetail({ mvid: this.$route.query.id });
      let {
        cover,
        id,
        name,
        desc,
        briefDesc,
        duration,
        playCount,
        publishTime,
        videoGroup,
      } = data;
      let artists = data.artists.map((item) => {
        return {
          name: item.name,
          id: item.id,
        };
      });
      this.details = {
        cover,
        id,
        name,
        desc,
        briefDesc,
        artists,
        duration,
        playCount,
        publishTime,
        videoGroup,
      };
      console.log(this.details);
    },
    // get comments
    async getComments() {
      let { hotComments, comments } = await getMVComments({
        id: this.$route.query.id,
        limit: 30,
        offset: 0,
      });
      this.comments = { hotComments, comments };
    },
    // get recommend video list
    async getVideoList() {
      let { mvs } = await getMVRecommend({ mvid: this.$route.query.id });
      this.videoList = mvs;
    },
  },

  created() {
    this.init();
  },
};
</script>
