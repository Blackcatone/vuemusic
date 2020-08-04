import Cookie from "js-cookie";

export default {
  state: {
    token: "123"
  },
  mutations: {
    setToken(state, val) {
      state.token = val;
      Cookie.set("token", val);
      console.log(state.token);
    },
    getToken(state) {
      state.token = Cookie.get("token");
    },
    clearToken(state) {
      state.token = ''
    }
  },
  actions: {}
};
