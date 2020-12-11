<template>
  <!-- 导航 -->
  <el-row class="header contaner">
    <!-- 头部左侧区域 -->
    <el-col :span="10" class="left">
      <el-row>
        <el-col :span="14">
          <i class="el-icon-location"></i>
          <span class="city">北京</span>
          <router-link to="/changecity" class="changecity"
            >切换城市</router-link
          >
          [
          <span class="detail">门头沟区</span>
          <span class="detail">大厂回族自治区</span>
          ]
        </el-col>
        <el-col :span="10">
          <router-link to="/login" class="login">立即登录</router-link>
          <router-link to="regist" class="regist">注册</router-link>
        </el-col>
      </el-row>
    </el-col>
    <!-- 头部右侧区域 -->
    <el-col :span="14" class="right">
      <ul>
        <li>我的美团</li>
        <li>手机APP</li>
        <li>商家中心</li>
        <li>美团规则</li>
        <li>网站导航</li>
      </ul>
    </el-col>
  </el-row>
</template>

<style lang="scss">
.header {
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  .left {
    text-align: left;
    .changecity {
      border: 1px solid rgb(229, 229, 229);
      margin: 0 3px;
      padding: 2px;
      //   color: $moreblack-color;
    }
    .detail {
      margin: 0 4px;
    }
    .login,
    .regist {
      margin-left: 10px;
    }
    .detail:hover {
      color: red;
    }
    .changecity,
    .detail,
    .regist {
      &:hover {
        color: red;
      }
    }
  }
  .right {
    text-align: right;
    ul {
      float: right;
      li {
        float: left;
        margin: 0 14px;
        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>