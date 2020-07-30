<template>
  <div class="layout">
    <page-header></page-header>
    <div class="flex-box">
      <sidebar></sidebar>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
    <player></player>
  </div>
</template>

<script>
import sidebar from "./Sidebar";
import pageHeader from "./Header";
import player from "./Player";

export default {
  components: {
    sidebar,
    pageHeader,
    player
  }
};
</script>

<style lang="scss">
.layout {
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
}
.flex-box {
  width: 100%;
  display: -webkit-flex;
  height: 500px;
  .main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
