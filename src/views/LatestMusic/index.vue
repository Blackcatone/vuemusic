<template>
  <div class="latest">
    <div class="home-content">
      <tabs></tabs>
      <div class="allSongs">
        <button class="allBtn" @click="onShow = !onShow">
          全部歌单
          <i class="iconfont down">&#xe665;</i>
        </button>
      </div>
      <div class="allSongsBox" v-show="onShow">
        <div class="box-title">
          <span>添加标签</span>
        </div>
        <div class="box-contenr">
          <div class="allSongTitle">
            <span>全部歌单</span>
          </div>
          <div class="allSongContent">
            <div class="title"><i class="iconfont">&#xe602;</i>语种</div>
            <div class="centers">
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
            </div>            
          </div>
                    <div class="allSongContent">
            <div class="title"><i class="iconfont">&#xe602;</i>语种</div>
            <div class="centers">
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
            </div>            
          </div>
                    <div class="allSongContent">
            <div class="title"><i class="iconfont">&#xe602;</i>语种</div>
            <div class="centers">
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
              <div class="song-box">华语</div>
            </div>            
          </div>

        </div>  
      </div>
      <div class="hotTag">
        <span>热门标签：</span> <span>华语｜</span>
      </div>
    </div>
  </div>
</template>

<script>
import tabs from "@/components/tabs";
export default {
  components: {
    tabs
  },
  data() {
    return {
      onShow: false
    };
  },
  methods: {
    onBtnOut() {

    }
  }
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
.allSongs {
  margin-top: 20px;
  .allBtn {
    height: 25px;
    border: 1px solid #dfdfdf;
    background-color: #fff;
    border-radius: 4px;
    font-size: 12px;
    text-align: center;
    outline: none;
    .down {
      font-size: 8px;
      margin-left: 4px;
    }
  }
  .allBtn:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
}
.allSongsBox {
  width: 500px;
  height: 350px;
  border: 1px solid #fcfcfc;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  .box-title {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #dedede;
    position: relative;
    z-index: 5;

    span {
      width: 100%;
      height: 50px;
      background: white;
      display: inline-block;
      box-sizing: border-box;
      padding: 0 20px;
    }
  }
  .box-title::after {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    border: 1px solid #dedede;
    background-color: #fff;
    transform: rotate(45deg);

    /* 定位 */
    position: absolute;
    z-index: -1;
    top: -6px;
    left: 30px;
  }
  .box-contenr {
    width: 100%;
    height: 300px;
    overflow-y: scroll;
    .allSongTitle {
      margin: 10px 20px;
      height: 30px;
      border: 1px solid #dedede;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
    }
    .allSongTitle:hover {
      background-color: #fafafa;
      cursor: pointer;
    }
    .allSongContent {
      margin: 0 20px;
      // height: 100%;
      display: -webkit-flex;
      margin-bottom: 10px;   
      z-index: 30;   
      .title {
        width: 88px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #d14646;
        i {
          font-size: 20px;
        }
      }
      .centers {
        width: 400px;
        height: 100%;
        .song-box {
          float: left;
          width: 70px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border: 1px solid #dfdfdf;
          font-size: 14px;
        }
        .song-box:hover {
          background-color: #fafafa;
          cursor: pointer;
        }
      }
    }
  }
}
.hotTag {

}
</style>