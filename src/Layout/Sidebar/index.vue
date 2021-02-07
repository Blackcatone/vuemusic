<template>
  <div class="sidebar">
    <div class="user-login">
      <i class="iconfont login-icon">&#xe8df;</i>
      <span class="text" @click="ontrue">未登录</span>
      <i class="iconfont left-icon">&#xea0f;</i>
    </div>
    <div class="user-login-info" v-show="isaction">
      <i class="iconfont close" @click="onclosef">&#xe63f;</i>
      <i class="iconfont phone-icon">&#xe71f;</i>
      <div class="phone-info">
        <i class="iconfont icon">&#xe71f;</i>
        <input type="text" class="phone-info-input a" v-model="phoneeLogin.phone" placeholder="请输入手机号" />
        <i class="iconfont icon">&#xe6ac;</i>
        <input type="password" class="phone-info-input b" v-model="phoneeLogin.password" placeholder="请输入密码" />
      </div>
      <button class="user-login-info-btn" @click="userLoging">登录</button>
      <a href="javascript:(0)" class="insta">注册</a>
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
import { postUserLogin } from '@/api/request'
import { mapState, mapMutations } from "vuex";
export default {
  computed:{
  },
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
      ],
      phoneeLogin:{
        phone: '',
        password: ''
      },
      isaction:false,
      logingData: {}
    };
  },
  mounted() {},
  methods: {
    ontrue() {
      this.isaction = true
    },
    onclosef() {
      this.isaction = false
    },
    userLoging() {
      console.log(this.phoneeLogin);
      postUserLogin(this.phoneeLogin).then(res => {
        // console.log(res);
        this.logingData = res
        let token = res.token
        let cookie = res.cookie
        this.$store.commit('setToken', cookie)
        
      })
    },

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
  .mymusic {
    font-size: 12px;
    color: #a7a7a7;
    margin-left: 20px;
    margin-top: 20px;
  }
  .color-a {
    color: #e43333;
    background-color: #e5e2e2;
  }
  .user-login-info {
    height: 480px;
    width: 350px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    z-index: 99;
    box-shadow: 3px 3px 20px 1px #d1d1d1;
    display: flex;
    flex-direction: column;
    .close {
      width: 16px;
      margin-top: 5px;
      margin-left: 330px;
      // margin: 5px;
      color: $myq-theme-fontcolor;
      cursor: default;
    }
    .phone-icon {
      font-size: 80px;
      margin: 0 auto;
      margin-top: 30px;
      color: #ffc2c2;
    }
    .phone-info {
      margin: 80px -10px;
      .icon {
        margin-left: 20px;
        position: relative;
        left: 20px;
        color: $myq-theme-fontcolor;
      }
      &-input {
        width: 270px;
        height: 30px;
        // border-radius: 5px;
        border: 1px solid $myq-theme-fontcolor;
        padding-left: 30px;
        outline: none;
      }
      input::-webkit-input-placeholder {
        font-size: 12px;
    }
      .a {
        border-radius: 5px 5px 0 0;
      }
      .b {
        border-radius: 0 0 5px 5px;
        border-top: none;

      }
    }
    &-btn {
      width: 300px;
      height: 40px;
      color: #fff;
      background-color: $my-theme-bgcolor;
      border: none;
      outline: none;
      border-radius: 5px;
      margin: 0 auto;
    }
    a {
      text-decoration: none;
      font-size: 14px;
      color: #000;
    }
    .insta {
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
</style>
