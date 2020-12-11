<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 12px;
  color: rgb(153, 153, 153);
  // color: $moreblack-color;
}
.contaner {
  width: 1190px;
  margin: 0 auto;
}
.text-left {
  text-align: left;
}
.float-left {
  float: left !important;
}
.float-right {
  float: right !important;
}
.inline {
  display: inline-block !important;
}
$highllight-color: rgb(254, 140, 0);
$moreblack-color: rgb(102, 102, 102);
</style>
