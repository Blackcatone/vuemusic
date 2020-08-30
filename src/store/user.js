import Cookie from "js-cookie";

export default {
  state: {
    cookie: ""
  },
  mutations: {
    setToken(state, val) {
      state.token = val;
      Cookie.set("token", val);
      console.log(state.token);
    },
    getToken(state) {
      state.cookie = Cookie.get("cookie");
    },
    clearToken(state) {
      state.cookie = ''
    }
  },
  actions: {}
};
