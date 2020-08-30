import Service from "@/utils/Service";

export function getConfigsByProductId(productId) {
  return Service({
    url: "/manager/getConfigsByProductId",
    params: { productId: productId },
  });
}
export function getBannerList() {
  return Service({
    url: "/banner?type=0",
    method: "get",
  });
}
export function postUserLogin(data) {
  return Service({
    url: "/login/cellphone",
    data: JSON.stringify(data),
    method: "post",
  });
}
export function getResource(data) {
  return Service({
    url: "/recommend/resource",
    data: JSON.stringify(data),
    method: "get"
  })
}
export function getPrivatecontent() {
  return Service({
    url: "/personalized/privatecontent",
    method: "get"
  })
}
