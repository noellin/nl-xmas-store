import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: {
      carts: []
    },
    isLoading: false
  },
  actions: {
    getCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit("LOADING", true);
      axios.get(api).then(response => {
        context.commit("GETCART", response.data.data);
        context.commit("LOADING", false);
      });
    },
    removeCart(context, id) {
      let url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart/${id}`;
      context.commit("LOADING", true);
      axios.delete(url).then(response => {
        context.dispatch("getCart");
        context.commit("LOADING", false);
      });
    },
    addtoCart(context, { id, qty }) {
      if (qty == 0) {
        alert("請選擇商品數量");
      } else {
        const api = `${process.env.VUE_APP_APIPATH}/api/${
          process.env.VUE_APP_CUSTOMPATH
        }/cart`;
        const add = {
          product_id: id,
          qty
        };
        axios.post(api, { data: add }).then(response => {
          context.dispatch("getCart");
          alert("已加入購物車！");
        });
      }
    },
    removeAllCart(context) {
      context.commit("LOADING", true);
      context.state.cart.carts.forEach(function(item) {
        let url = `${process.env.VUE_APP_APIPATH}/api/${
          process.env.VUE_APP_CUSTOMPATH
        }/cart/${item.id}`;
        axios.delete(url).then(response => {
          context.dispatch("getCart");
          context.commit("LOADING", false);
        });
      });
    },
    addCoupon(context, code) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/coupon`;
      const coupon = { code: code };
      context.commit("LOADING", true);
      axios.post(url, { data: coupon }).then(response => {
        alert(response.data.message);
        context.dispatch("getCart");
        context.commit("LOADING", false);
      });
    }
  },
  mutations: {
    LOADING(state, boolean) {
      state.isLoading = boolean;
    },
    GETCART(state, response) {
      state.cart = response;
    }
  },
  getters: {
    isLoading: state => state.isLoading,
    cart: state => state.cart
  }
});
