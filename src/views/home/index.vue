<template>
  <div class="home">
    <div class="home-list">
      <div class="swiper">
        <template>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in bannersList" :key="item.imageUrl">
              <img class="swiper-img" :src="item.imageUrl" alt="">
              <div class="swiper-title" :style="{color:item.typeColor}">{{ item.typeTitle}}</div>
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
      <div class="redSong">
        <div class="redSong-title">推荐歌单<i class="iconfont">&#xe631;</i></div>
        <div class="redSong-content">
          <div class="redSong-content-box">
            <img src="https://p1.music.126.net/3KT8mmZUQCmnhUBqk7ue6A==/109951164488974658.jpg" alt="">
            <div class="playnub iconfont">&#xe6b4;<span>&nbsp;648万</span></div>
            <div class="redSong-content-box-title">[下班听我的] 夏日回家路上 挡不住的放松好音乐</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { getBannerList } from "@/api/request";
export default {
  name: "home",
  data() {
    return {
      bannersList: []
    };
  },
  created() {
    getBannerList().then(res => {
      this.bannersList = res.banners;
      console.log(this.bannersList);
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
  height: 1200px;
  background-color: #fff;
  &-list {
    height: 100%;
    margin: 0 30px;
    .swiper {
      padding-top: 10px;
      height: 252px;
      &-img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      &-title{
        float:right;
        position: relative;
        top: -20px;
        color: #fff;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        background-color: $my-theme-bgcolor;
        padding: 0 10px;
        border-radius: 8px 0;
      }
    }
    .redSong {
      &-title {
        color: #000;
      }
      &-content {

        &-box {
          margin: 20px 20px 0 0;
          img {
            width: 150px;
            border-radius: 5px;
            

          }
          .playnub {
            position: relative;
            top: -148px;
            left: 95px;
            color: #fff;
            font-size: 12px;
          }
          &-title {
            font-size: 14px;
            color: $mys-theme-fontcolor;
            display:block;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          }
        }
      }
    }
  }
}
</style>
