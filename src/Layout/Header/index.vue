<template>
  <div class="header">
    <div class="header-lift">
      <div class="lift-box">
        <i class="iconfont left">&#xe632;</i>
        <i class="iconfont">&#xe631;</i>        
      </div>

    </div>
    <div class="header-content"></div>
    <div class="header-rigth">
      <i class="iconfont search">&#xe607;</i>
      <input class="input-search" type="text" placeholder="搜索" />
      <i class="iconfont left">&#xe685;</i>
      <i class="iconfont left">&#xe9b2;</i>
      <i class="iconfont left">&#xe684;</i>
      <i class="iconfont left">&#xe65f;</i>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  height: 50px;
  line-height: 50px;
  border-radius: 5px 5px 0 0;
  background: #e43333;
  display: flex;
  display: -webkit-flex;
  &-lift {
    width: 200px;
    flex: 1;
    color: #f1f0f0;
    cursor: Default;
    .lift-box{
      position: relative;
      left: 160px;
    }
    .left {
      margin-right: 10px;
      color: #fff;
    }
  }
  &-rigth {
    flex: 2;
    .search {
      position: relative;
      left: 20px;
      cursor: pointer;
      color: #fff;
      font-size: 12px;
    }
    .input-search {
      height: 20px;
      padding-left: 20px;
      border-radius: 20px;
      border: none;
      background-color: #eba4a4;
      cursor: text;
      font-size: 12px;
    }
    .left{
      margin-left: 22px;
      color: #e9e0e0;
      cursor: Default;
    }
  }
  &-content {
    flex: 3;
  }
}
</style>
