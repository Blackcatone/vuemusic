<template>
  <div class="home">
    <div class="home-list">
          <tabs></tabs>
      <div class="swiper">
        <template>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in bannersList" :key="item.imageUrl">
              <img class="swiper-img" :src="item.imageUrl" alt />
              <div class="swiper-title" :style="{color:item.typeColor}">{{ item.typeTitle}}</div>
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
      <div class="redSong">
        <div class="redSong-title">
          推荐歌单
          <div class="redSong-title-left">
            <span>更多</span>
            <i class="iconfont">&#xe631;</i>
          </div>
        </div>
        <div class="redSong-content">
          <div class="redSong-content-box">
            <img src="https://p1.music.126.net/3KT8mmZUQCmnhUBqk7ue6A==/109951164488974658.jpg" alt />
            <div class="playnub iconfont">
              &#xe6b4;
              <span>&nbsp;648万</span>
            </div>
            <div class="redSong-content-box-title">[下班听我的] 夏日回家路上 挡不住的放松好音乐wwwww</div>
          </div>

          <div class="redSong-content-box" v-for="item in resourceList" :key="item.id">
            <img :src="item.picUrl" />
            <div class="playnub iconfont">
              &#xe6b4;
              <span>&nbsp;648万</span>
            </div>
            <div class="redSong-content-box-title">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="exclusive">
        <div class="exclusive-title">
          <span class="title-t">独家放送</span>
          <div class="exclusive-lift">
            <span>更多</span>
            <i class="iconfont">&#xe631;</i>
          </div>
        </div>
        <div class="exclusive-content">
          <div class="exclusive-box" v-for=" item in PrivatecontentList" :key="item.id">
            <i class="iconfont">&#xe740;</i>
            <img :src="item.sPicUrl" alt />
            <div class="title">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="new-music">
        <div class="exclusive-title">
          <span class="title-t">最新音乐</span>
          <div class="exclusive-lift">
            <span>更多</span>
            <i class="iconfont">&#xe631;</i>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
 
<script>
import { getBannerList, getResource, getPrivatecontent } from "@/api/request";
import tabs from '@/components/tabs.vue'
export default {
  components: {
    tabs
  },
  name: "home",
  data() {
    return {
      bannersList: [],
      resourceList: [],
      PrivatecontentList: []
    };
  },
  created() {
    getBannerList().then(res => {
      this.bannersList = res.banners;
    });
    getResource().then(res => {
      let data = res.recommend;
      this.resourceList = data;
    });
    getPrivatecontent().then(res => {
      this.PrivatecontentList = res.result;
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
  height: 1200px;
  background-color: #fff;
  overflow-x: hidden;
  &-list {
    height: 100%;
    margin: 0 30px;
    .swiper {
      padding-top: 10px;
      height: 252px;
      &-img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      &-title {
        float: right;
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
        display: flex;
        justify-content: space-between;
        padding-bottom: 5px;
        border-bottom: 1px solid #e7e7e7;
        &-left {
          font-size: 12px;
          color: #919191;
          cursor: pointer;
          i {
            font-size: 12px;
          }
        }
      }
      &-content {
        width: 100%;
        height: 416px;
        overflow: hidden;
        display: block;
        &-box {
          width: 150px;
          margin: 20px 20px 0 0;
          float: left;

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
            width: 160px;
            font-size: 12px;
            letter-spacing: 1.25px;
            font-family: "Gill Sans", sans-serif;
            color: $mys-theme-fontcolor;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }
      }
    }
    .exclusive {
      width: 100%;
      height: 200px;
      margin-top: 20px;
      .exclusive-content {
        width: 100%;
        height: 100%;
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        .exclusive-box {
          width: 220px;
          height: 210px;
          position: relative;

          i {
            font-size: 20px;
            position: absolute;
            top: 5px;
            left: 5px;
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
          }
          img {
            width: 220px;
            height: 150px;
          }
          .title {
            padding-top: 5px;
            font-size: 12px;
            letter-spacing: 1.25px;
            font-family: "Gill Sans", sans-serif;
            color: $mys-theme-fontcolor;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }
      }
    }
  }
}
.exclusive-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 5px;
  margin-top: 20px;
  .title-t {
    font-size: 18px;
  }
  .exclusive-lift {
    font-size: 12px;
    color: #919191;
    cursor: pointer;
    i {
      font-size: 12px;
    }
  }
}
</style>
