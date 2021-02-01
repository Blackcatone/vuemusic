import Service from "@/utils/Service";

export function getConfigsByProductId(productId) {
  return Service({
    url: "/manager/getConfigsByProductId",
    params: { productId: productId },
  });
}
// banner图
export function getBannerList() {
  return Service({
    url: "/banner?type=0",
    method: "get",
  });
}
// 用户登录
export function postUserLogin(data) {
  return Service({
    url: "/login/cellphone",
    data: JSON.stringify(data),
    method: "post",
  });
}
// 获取每日推荐歌单
export function getResource(data) {
  return Service({
    url: "/recommend/resource",
    data: JSON.stringify(data),
    method: "get"
  })
}
// 独家放送(入口列表)
export function getPrivatecontent() {
  return Service({
    url: "/personalized/privatecontent",
    method: "get"
  })
}
// 获取精品歌单
export function getBsetSong() {
  return Service({
    url: "/top/playlist/highquality",
    method: "get"
  })
}
// 获取精品歌单标签列表
export function getSongBsetTagList() {
  return Service({
    url: "/playlist/highquality/tags",
    method: "get"
  })
}
// 获取歌单分类
export function getSongTagList() {
  return Service({
    url: "/playlist/catlist",
    method: "get"
  })
}
