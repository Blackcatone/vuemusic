<template>
  <div class="header">
    <div class="header-lift">
      <i class="iconfont left">&#xe632;</i>
      <i class="iconfont">&#xe631;</i>
    </div>
    <div class="header-content">
      <i class="iconfont search">&#xe607;</i>
      <input class="input-search" type="text" placeholder="搜索" />
    </div>
    <div class="header-rigth">
      
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
  background: #d52b2b;
  display: flex;
  display: -webkit-flex;
  &-lift{
    flex: 1;
    position: relative;
    left: 160px;
    color: #f1f0f0;
    .left{
      margin-right: 10px;
      color: #fff;
    }
  }
  &-content{
    flex: 1;
    .search{
      position: relative;
      left: 20px;
      cursor: pointer;
    }
    .input-search{
      height: 20px;
      padding-left: 20px;
      border-radius: 5px;
      border: none;
      background-color: #e2d7d7;
      cursor: text;
    }
  }
  &-rigth{
    flex: 1;
  }
}
</style>
