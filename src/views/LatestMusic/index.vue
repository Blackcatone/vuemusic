<template>
  <div class="latest">
    <div class="home-content">
      <tabs></tabs>
      <div class="best-song" :style="{backgroundImage:`url(${BsetSong.coverImgUrl})`}">
          <img :src="BsetSong.coverImgUrl" alt="">
        <div class="best-song-text">
          <div class="best-song-icon"><i class="iconfont icons">&#xe7a0;</i><p>精品歌单</p></div>
          <div class="song-texts">
            <p class="text-1">{{BsetSong.name}}</p>
            <p class="text-2">{{BsetSong.copywriter}}</p>
          </div>
        </div>
      </div>
      <div class="song-tag">
        <div class="song-tag-all">
          <div class="all-tag-buttom">全部歌单<i class="iconfont">&#xe631;</i></div>
          <div class="song-box" v-show="true">
            <div class="song-box-header"><p class="isTrue">全部歌单</p></div>
            <div class="song-box-content">语种 <p>华语</p></div>
          </div>
        </div>
        <div class="song-tag-start">
          <p class="isTrue">华语</p>
          <p>华语</p>
          <p>华语</p>
          <p>华语</p>
          <p>华语</p>
          <p>华语</p>
          <p>华语</p>
          <p>华语</p>
          <p>华语</p>
          <p>华语</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tabs from "@/components/tabs";
import { getBsetSong, getSongTagList, getSongBsetTagList } from "@/api/request.js"
import { Message } from "element-ui"
export default {
  components: {
    tabs
  },
  data() {
    return {
      onShow: false,
      BsetSong:[]
    };
  },
  created() {
    getBsetSong().then(res =>{
      if(res.code === 200) {
        this.BsetSong = res.playlists[0]
       console.log(this.BsetSong);
      } else {
        this.$message.error("数据获取失败")
      }
    }),
    getSongBsetTagList().then(res => {
      console.log(res);
    })
  },
  methods: {
    onBtnOut() {

    },
  },

};
</script>

<style lang="scss">
.latest {
  height: 1200px;
  background-color: #fff;
  overflow-x: hidden;
}
.home-content {
  height: 100%;
  margin: 0 30px;
}
.best-song {
  position: relative;
  width: 100%;
  height: 170px;
  border-radius: 10px;
  display: flex;
  margin: 10px 0;
  background-position: bottom;
  overflow: hidden;
  // 
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background: inherit;
    filter: blur(20px);
    background-size: cover;
    z-index: 1;
  }
  img {
    height: 100%;
    line-height: 170px;
    padding-left: 10px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 20px;
    z-index: 10;
  }
  .best-song-text {
    height: 170px;
        z-index: 10;
    .best-song-icon {
      display: flex;
      height: 30px;
      width:100px;
      border-radius: 20px;
      border: 1px solid #cac147;
      color: #cac147;
      font-size: 14px;
      line-height: 30px;
      margin-top: 30px;
          z-index: 10;
    }
    .icons {
      box-sizing: border-box;
      padding-left: 10px;
      padding-right: 4px;
          z-index: 10;
    }

  }
  .song-texts {
    .text-1 {
      color: #fff;
      margin: 30px 0 10px 0;
    }
    .text-2 {
      color: #a0a0a0;
      font-size: 12px;
    }
  }
}
.song-tag {
  display: flex;
  justify-content: space-between;
  .song-tag-all {
    .all-tag-buttom {
      height: 30px;
      width: 100px;
      text-align: center;
      line-height: 30px;
      border: 1px solid #ccc;
      border-radius: 20px;
      font-size: 14px;
      color: #000;
      cursor: pointer;
    }
    .song-box {
      width: 745px;
      height: 500px;
      border: 1px solid rgb(236, 236, 236);
      margin-top: 5px;
      box-shadow: 0 0 5px #ccc;
      &-header {
        border-bottom: 1px solid #e9e9e9;
        height: 55px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 20px;
        p {
          width: 100px;
          height: 30px;
          font-size: 14px;
          text-align: center;
          line-height: 30px;
        }
      }
      &-content {
        display: flex;
      }
    }
  }
  .song-tag-start {
    display: flex;
    p {
      width: 40px;
      height: 20px;
      font-size: 12px;
      line-height: 20px;
      text-align: center;

    }
  }
}
.isTrue {
  border-radius: 20px;
  background-color: rgba(255, 219, 219, 0.3);
  color: rgb(249,44,48);   
}

</style>