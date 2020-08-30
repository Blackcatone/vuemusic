<template>
  <div class="tabs">
    <!-- <div class="boxs">
      <div class="box action">个性推荐</div>
      <div class="box">歌单</div>
      <div class="box">主播电台</div>
      <div class="box">排行榜</div>
      <div class="box">歌手</div>
      <div class="box">最新音乐</div>
    </div> -->
    <div class="boxs">
        
        <div :class="'box ' + item.isaction" v-for="item in tabList" :key="item.title">
            <router-link :to="item.path">{{item.title}}</router-link>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          path: "/home",
          title: "个性推荐",
          isaction: "action"
        },
        {
          path: "/music",
          title: "歌单",
          isaction: ""
        },
        {
          path: "/home",
          title: "主播电台",
          isaction: ""
        },
        {
          path: "/home",
          title: "排行榜",
          isaction: ""
        },
        {
          path: "/home",
          title: "歌手",
          isaction: ""
        },
        {
          path: "/home",
          title: "最新音乐",
          isaction: ""
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  font-family: "Gill Sans", sans-serif;
  border-bottom: 1px solid #e4e4e4;
}
.boxs {
  width: 70%;
  display: -webkit-flex;
  justify-content: space-between;
  margin: 0 auto;
}
.box {
  width: 60px;
  text-align: center;
//   text-decoration: none;
  color: #000000;
}
.box a:hover {
  color: #e43333;
  cursor: pointer;
}
.action {
  border-bottom: 2px solid #e43333;
  color: #e43333 !important;
}
a {
    text-decoration: none;
    color: #000;
}
</style>

