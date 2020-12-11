<template>
  <div class="home-nav">
    <!-- 左侧导航 -->
    <dl class="nav" @mouseleave="mouseLeaveNav">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in navData"
        :key="index"
        @mouseenter="mouseEnterNav(item.children)"
      >
        <i :class="item.icon" class="icontype"></i>
        <span class="type">{{ item.title }}</span>
        <i class="el-icon-arrow-right float-right tomore"></i>
      </dd>
    </dl>
    <!-- 导航详情 -->
    <div
      class="detail"
      v-if="detailData"
      @mouseenter="mouseEnterDetail"
      @mouseleave="mouseleaveDetail"
    >
      <template v-for="(item, index) in detailData">
        <dl class="classic" :key="index">
          <dt>{{ item.title }}</dt>
          <dd v-for="(f, v) in item.children" :key="v">{{ f }}</dd>
        </dl>
      </template>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      timer: null,
      detailData: null,
      navData: [
        {
          title: "美食",
          icon: "el-icon-food",
          children: [
            {
              title: "美食",
              children: [
                "代金券",
                "甜点饮品",
                "火锅自助餐",
                "小吃快餐",
                "日韩料理",
              ],
            },
          ],
        },
        {
          title: "酒店",
          icon: "el-icon-house",
          children: [
            {
              title: "星级",
              children: ["一星", "二星", "三星", "四星", "五星"],
            },
            {
              title: "舒适度",
              children: ["还可以", "非常舒适", "very舒适", "nice"],
            },
          ],
        },
      ],
    };
  },
  methods: {
    //  鼠标进入nav区域
    mouseEnterNav(item) {
      this.detailData = item;
    },
    // 鼠标离开nav区域
    mouseLeaveNav() {
      var that = this;
      this.timer = setTimeout(function () {
        that.detailData = null;
      }, 200);
    },
    // 鼠标进入detail区域
    mouseEnterDetail() {
      clearTimeout(this.timer);
    },
    // 鼠标离开detail区域
    mouseleaveDetail() {
      this.detailData = null;
    },
  },
};
</script>

<style lang="scss">
.home-nav {
  position: relative;
  dl.nav {
    width: 230px;
    height: 474px;
    cursor: pointer;
    border: 1px solid rgb(229, 229, 229);
    background-color: rgb(255, 255, 255);
    position: relative;
    top: -30px;
    z-index: 1000;
    box-sizing: border-box;
    padding: 15px 12px;
    dt {
      height: 35px;
      font-size: 16px;
      font-weight: 700;
      color: rgb(34, 34, 34);
    }
    dd {
      height: 25px;
      line-height: 25px;
      // margin-bottom: 10px;
    }
    .type {
      margin-left: 11px;
      color: rgb(100, 100, 100);
      font-size: 13px;
    }
    .icontype {
      font-size: 16px;
    }
    .food {
      color: rgb(255, 130, 0);
    }
    .hotel {
      color: rgb(155, 94, 62);
    }
    .tomore {
      padding-top: 5px;
    }
  }
  .detail {
    width: 400px;
    height: 416px;
    cursor: pointer;
    position: absolute;
    top: 28px;
    left: 230px;
    background-color: #fff;
    z-index: 199;
    box-sizing: border-box;
    padding: 20px;
    dl.classic {
      margin-bottom: 20px;
      dt {
        height: 22px;
        border-bottom: 1px solid rgb(229, 229, 229);
        color: rgb(102, 102, 102);
        font-size: 16px;
        font-weight: 500;
      }
      dd {
        display: inline-block;
        height: 15px;
        margin-top: 10px;
        margin-right: 16px;
      }
    }
  }
}
</style>