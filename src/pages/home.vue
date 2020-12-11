<template>
  <div class="home contaner">
    <el-row>
      <el-col :span="5" class="text-left nav">
        <home-nav></home-nav>
      </el-col>
      <el-col :span="19" class="text-left">
        <home-life></home-life>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeNav from "@/components/home/HomeNav.vue";
import HomeLife from "@/components/home/HomeLife.vue";
export default {
  components: {
    HomeNav,
    HomeLife,
  },
};
</script>

<style lang="scss">
</style>