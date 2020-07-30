<template>
  <div class="player">
    <div class="player-content">
      <img
        src="http://p1.music.126.net/xuCiAOW6HUoXzm8AQoPnUg==/5927467185783649.jpg?param=40y40"
        alt
      />
      <div class="player-content-text">
        <div class="title">
          精霊剣舞祭
          <span class="singer">-にーそっくすす</span>
        </div>
        <div class="time">00:00 / 03:31</div>
      </div>
    </div>
    <div class="player-control">
      <i class="iconfont icon-control">&#xe602;</i>
      <i class="iconfont icon-control a">&#xe63b;</i>
      <i class="iconfont icon-control z">&#xe6d6;</i>
      <i class="iconfont icon-control b">&#xe677;</i>
      <i class="iconfont icon-control">&#xe654;</i>
    </div>
    <div class="player-buttons">
      <i class="iconfont icon-control a">&#xe61f;</i>
      <i class="iconfont icon-control">&#xe672;</i>
      <i class="iconfont icon-control">&#xe63a;</i>
      <i class="iconfont icon-control">&#xe759;</i>
      <i class="iconfont icon-control s">&#xe626;</i>    
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.player {
  height: 50px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  cursor: Default;
  &-content {
    margin-left: 5px;
    display: flex;
    &-text {
      margin-left: 5px;
      .title {
        font-size: 14px;
        color: #505050;
        margin-top: 10px;
      }
      .singer {
        font-size: 8px;
        color: #b1b1b1;
      }
      .time {
        font-size: 10px;
        color: #c4c4c4;
        margin-top: 5px;
      }
    }
    img {
      margin: 5px;
      border-radius: 5px;
    }
  }
  &-control {
    position: relative;
    top: -5px;
    cursor: pointer;

    color: #6e6e6e;
    .icon-control{
      margin: 0 15px 0px 15px;
    }
    .a{
      color: #d64b4b;
      font-size: 16px;
    }
    .b{
      color: #d64b4b;
      font-size: 20px;      
    }
    .z{
      font-size: 40px;  
      color: #d64b4b;
      position: relative;
      top: 10px;
    }
  }
  &-buttons {
    line-height: 50px;
    .icon-control{
      margin: 0 10px;
      color: #6e6e6e;
    }
    .a{
      cursor: pointer;
    }
    .s{
      padding-right: 20px;
    }
  }
}
</style>
