<template>
  <div>SheetDetail</div>
</template>

<script>
import { GetSheetDetail } from "@/api/sheetDetail.js";
export default {
  mounted() {
    GetSheetDetail({ id: this.$route.query.id }).then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style></style>
