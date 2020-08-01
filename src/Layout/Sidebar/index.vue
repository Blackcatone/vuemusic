<template>
  <div class="sidebar">
    <div class="user-login">
      <i class="iconfont login-icon">&#xe8df;</i>
      <span class="text">未登录</span>
      <i class="iconfont left-icon">&#xea0f;</i>
    </div>
    <div class="user-login-info">
      <input type="text" placeholder="请输入手机号">
      <input type="password" placeholder="请输入密码">
    </div>
    <div :class="'music-list ' + item.isAceat" v-for="item in userList" :key="item.title">
      <i class="iconfont music-icon" v-html="item.icon"></i>
      <span class="text">{{item.title}}</span>
    </div>
    <div class="mymusic">我的音乐</div>
    <div :class="'music-list ' + item.isAceat" v-for="item in mymusic" :key="item.title">
      <i class="iconfont music-icon" v-html="item.icon"></i>
      <span class="text">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [
        {
          icon: "&#xe600;",
          title: "发现音乐",
          path: "",
          isAceat: "color-a"
        },
        {
          icon: "&#xe876;",
          title: "私人FM",
          path: "",
          isAceat: ""
        },
        {
          icon: "&#xe740;",
          title: "视频",
          path: "",
          isAceat: ""
        },
        {
          icon: "&#xe8df;",
          title: "朋友",
          path: "",
          isAceat: ""
        }
      ],
      mymusic: [
        {
          icon: "&#xe600;",
          title: "iTunes音乐",
          path: "",
          isAceat: ""
        },
        {
          icon: "&#xe6e9;",
          title: "下载管理",
          path: "",
          isAceat: ""
        }
      ]
    };
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.sidebar {
  width: 200px;
  height: inherit;
  background: #f0efef;
  .user-login {
    height: 50px;
    line-height: 50px;
    margin: 5px;
    .login-icon {
      height: 40px;
      font-size: 40px;
      color: #fff;
      background-color: #e2e2e2;
      border-radius: 50%;
      margin-left: 5px;
    }
    .text {
      margin-left: 10px;
      position: relative;
      top: -10px;
      font-size: 14px;
      color: #4d4d4d;
    }
    .left-icon {
      position: relative;
      top: -10px;
      font-size: 8px;
      color: #a7a7a7;
    }
  }
  .music-list {
    height: 40px;
    line-height: 40px;
    color: #444444;
    .music-icon {
      margin: 0 10px 0 20px;
      font-size: 16px;
    }
    .text {
      font-size: 14px;
    }
  }
  .mymusic{
    font-size: 12px;
    color: #a7a7a7;
    margin-left: 20px;
    margin-top: 20px;
  }
  .color-a {
    color: #e43333;
    background-color: #e5e2e2;
  }
  .user-login-info{
    height: 400px;
    width: 250px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    z-index: 99;
    box-shadow: 3px 3px 20px 1px #d1d1d1;
  }
  
}
</style>
