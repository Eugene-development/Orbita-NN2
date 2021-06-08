export const state = () => ({
  visibleAdvice: false,
  visibleCart: false,
});

export const actions = {

  change_visibleAdvice({ commit, state }) {
    const visibleAdvice = !state.visibleAdvice;
    const visibleCart = false;
    commit('VISIBLE_ADVICE', visibleAdvice);
    commit('VISIBLE_CART', visibleCart);
  },

  change_visibleCart({ commit, state }) {
    const visibleCart = !state.visibleCart;
    const visibleAdvice = false;
    commit('VISIBLE_ADVICE', visibleAdvice);
    commit('VISIBLE_CART', visibleCart);
  },

  close_visible({ commit }) {
    const visibleAdvice = false;
    const visibleCart = false;
    commit('VISIBLE_ADVICE', visibleAdvice);
    commit('VISIBLE_CART', visibleCart);
  },
};

export const mutations = {
  VISIBLE_ADVICE: (state, visibleAdvice) => state.visibleAdvice = visibleAdvice,
  VISIBLE_CART: (state, visibleCart) => state.visibleCart = visibleCart,
};

export const getters = {
  visibleAdvice: state => state.visibleAdvice,
  visibleCart: state => state.visibleCart,
};
