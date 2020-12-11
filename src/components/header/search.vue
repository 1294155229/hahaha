<template>
  <div class="search">
    <el-row class="contaner">
      <el-col :span="6" class="logo text-left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          alt="美团"
        />
      </el-col>
      <el-col :span="12" class="input-box">
        <!-- 输入框 -->
        <el-row class="my-input">
          <el-input
            v-model="input"
            style="width: 467px"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
          ></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <!-- 热门搜索 -->
          <ul class="drop" v-if="isShowHotSearch">
            <li v-for="(item, index) in hotData" :key="index" class="text-left">
              <router-link to="/">{{ item }}</router-link>
            </li>
          </ul>
          <!-- 根据搜索内容进行搜索 -->
          <ul class="drop" v-if="isShowMySearch">
            <li
              v-for="(item, index) in searchData"
              :key="index"
              class="text-left"
            >
              <router-link to="/">{{ item }}</router-link>
            </li>
          </ul>
        </el-row>
        <!-- 热门搜索 -->
        <el-row class="hot-search">
          <ul class="text-left" v-if="isShowHotList">
            <li v-for="(item, index) in hotData" :key="index">
              <router-link to="/">{{ item }}</router-link>
            </li>
          </ul>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      isShowHotList: true,
      hotData: ["火锅", "大盘鸡", "面条", "手机"],
      searchData: ["我搜索的火锅", "我搜索的大盘鸡", "我搜索的面条"],
    };
  },
  computed: {
    //  热门下拉框是否显示
    isShowHotSearch() {
      return this.input == "" && this.isShowHotList == false;
    },
    // 对应的搜索内容是否显示
    isShowMySearch() {
      return this.input != "" && this.isShowHotList == false;
    },
  },
  methods: {
    //输入框聚焦事件
    focus() {
      this.isShowHotList = false;
    },
    // 输入框失焦事件
    blur() {
      this.isShowHotList = true;
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  height: 157px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding-top: 28px;
  .logo {
    img {
      width: 126px;
      height: 46px;
    }
  }
  .input-box {
    .my-input {
      position: relative;
      .drop {
        width: 467px;
        height: auto;
        z-index: 100;
        background-color: #ffffff;
        cursor: pointer;
        position: absolute;
        top: 40px;
        left: 19px;
        box-sizing: border-box;
        padding: 10px 20px;
        border: 1px solid rgb(229, 229, 229);
        border-top: none;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        li {
          margin-bottom: 5px;
        }
      }
    }
  }
  .hot-search {
    ul {
      padding: 10px 20px;
      cursor: pointer;
      li {
        float: left;
        margin-right: 5px;
      }
    }
  }
}
</style>