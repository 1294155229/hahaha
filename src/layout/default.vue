<template>
  <div class="page-default">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/default/header.vue";
import MyFooter from "@/components/default/footer.vue";

export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="scss">
.page-default {
  background-color: rgb(248, 248, 248);
}

.el-header {
  height: 162px !important;
  padding: 0px !important;
}

.el-main {
  overflow: unset !important;
}

.el-footer {
  height: auto !important;
}
</style>