<template>
<div class="song-box">
  <div class="song-box-img">
    <img src="http://p3.music.126.net/AdzjlCarP9a8rajChZAsiQ==/109951163017978367.jpg" alt="">
    <div class="nuber-icon">
      <i class="iconfont">&#xe6b4;</i>
      <p>23333</p></div>
    <div class="song-box-content">
      <i class="iconfont">&#xe77c;</i>
      <p>花嫁赫萝</p>    
    </div>
  </div>
  <div class="song-text">
    <p>『物哀纯音』漫天飞舞的红叶，暮色黄昏</p>
  </div>  
</div>
</template>

<script>
export default {
  


}
</script>

<style lang="scss" scoped>
.song-box {
  width: 170px;
  height: 250px;
  padding-right: 10px;

  &-img {
    width: inherit;
    height: 170px;
    position: relative;
    img {
      width: 170px;
      border-radius: 4px;
    }
    .nuber-icon {
      position: absolute;
      top: 5px;
      right: 5px;
      color: #fff;
      font-size: 12px;
      display: flex;
      i {
        font-size: 10px;
        box-sizing: border-box;
        padding-right: 2px;
      }
    }
    .song-box-content {
      position: absolute;
      bottom: 8px;
      left: 5px;
      font-size: 12px;
      color: #fff;
      display: flex;
      i {
        box-sizing: border-box;
        padding-right: 4px;
        font-size: 10px;
      }

    }

  }
  .song-text {
    padding-top: 10px;
    p {
    font-size: 14px;
    color: rgb(55,55,55);
    letter-spacing: 1px;
    line-height: 20px;
    }
  }
}
</style>
