module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: `@import "@/assets/golab/vars.scss";`,
      },
    },
  },
};
