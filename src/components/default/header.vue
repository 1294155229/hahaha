<template>
  <el-row>
    <!-- 导航 -->
    <my-nav></my-nav>
    <!-- 搜索框 -->
    <my-search></my-search>
  </el-row>
</template>

<script>
import MyNav from "@/components/header/nav.vue";
import MySearch from "@/components/header/search.vue";

export default {
  components: {
    MyNav,
    MySearch,
  },
};
</script>

<style lang="scss">
</style>