<template>
  <div>
    <div class="block">
      <el-carousel height="241px">
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <h3 class="small">
            <img :src="item.imgUrl" alt="" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          url: "XXX",
          imgUrl:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        },
        {
          url: "XXX",
          imgUrl:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        },
      ],
    };
  },
};
</script>


<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.small img {
  width: 100% !important;
  height: 100% !important;
}
</style>