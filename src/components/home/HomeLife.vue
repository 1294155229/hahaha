<template>
  <div class="home-life">
    <!-- 头部导航 -->
    <el-row class="header-nav">
      <ul>
        <li>
          <router-link to="/">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/">猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/">美团酒店</router-link>
        </li>
        <li>
          <router-link to="/">民宿／公寓</router-link>
        </li>
      </ul>
    </el-row>
    <!-- 轮播 -->
    <el-row class="rotation">
      <el-col :span="14">
        <my-rotation></my-rotation>
      </el-col>
      <el-col :span="4" class="img">
        <img
          src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
          alt=""
        />
      </el-col>
      <el-col :span="6" class="login">
        <div>
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
            alt=""
          />
        </div>
        <p class="sayHi">Hi,你好</p>
        <p class="regist-box box"><router-link to="/">注册</router-link></p>
        <p class="login-box box"><router-link to="/">登录</router-link></p>
      </el-col>
    </el-row>
    <!-- 图片展示区 -->
    <el-row class="img-show">
      <el-col :span="7">
        <img
          class="one"
          src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
          alt=""
        />
      </el-col>
      <el-col :span="7">
        <img
          class="one"
          src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
          alt=""
        />
      </el-col>
      <el-col :span="4">
        <img
          class="two"
          src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
          alt=""
        />
      </el-col>
      <el-col :span="6" class="code">
        <img
          src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
          alt=""
        />
        <p class="phone">美团APP手机版</p>
        <p class="eat"><span class="red">一元起</span><span>吃喝玩乐</span></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyRotation from "@/components/header/MyRotation.vue";
export default {
  components: {
    MyRotation,
  },
};
</script>

<style lang="scss">
//头部导航
.header-nav {
  position: relative;
  top: -15px;
  li {
    float: left;
    margin: 0 20px;
    font-size: 16px;
    font-weight: 700;
    a {
      color: rgb(34, 34, 34);
    }
  }
}
// 轮播
.rotation {
  padding: 10px 0px;
  .img {
    img {
      width: 150px;
      height: 100%;
    }
  }
  .login {
    background-color: #fff;
    width: 228px;
    height: 241px;
    border: 1px solid rgb(229, 229, 229);
    box-sizing: border-box;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      img {
        width: 47px;
        height: 47px;
        border-radius: 30px;
        margin-bottom: 5px;
      }
    }
    .sayHi {
      color: rgb(34, 34, 34);
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .box {
      width: 118px;
      height: 38px;
      border: 1px solid rgb(229, 229, 229);
      border-radius: 40px;
      text-align: center;
      a {
        width: 118px;
        height: 38px;
        color: rgb(34, 34, 34);
        font-size: 14px;
        height: 38px;
        line-height: 38px;
      }
    }
    .regist-box {
      margin-bottom: 15px;
    }
  }
}
// 图片展示区
.img-show {
  height: 165px;
  .one {
    width: 270px;
    height: 165px;
  }
  .two {
    width: 150px;
    height: 165px;
  }
  .code {
    width: 228px;
    height: 165px;
    background-color: #fff;
    border: 1px solid rgb(229, 229, 229);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding-top: 20px;
    img {
      width: 95px;
      height: 95px;
    }
    .phone {
      color: rgb(34, 34, 34);
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .eat {
      color: rgb(63, 63, 63);
      font-size: 12px;
      font-weight: 500;
      .red {
        color: rgb(236, 83, 48);
        margin-right: 5px;
      }
    }
  }
}
</style>