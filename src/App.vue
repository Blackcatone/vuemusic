<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1970900 */
  src: url('//at.alicdn.com/t/font_1970900_wu0xbokiwi.eot');
  src: url('//at.alicdn.com/t/font_1970900_wu0xbokiwi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1970900_wu0xbokiwi.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1970900_wu0xbokiwi.woff') format('woff'),
  url('//at.alicdn.com/t/font_1970900_wu0xbokiwi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1970900_wu0xbokiwi.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a0a0a0;
  user-select:none;
}
.flex-ac {
  display: -webkit-flex;
  align-items: center;
}

</style>
