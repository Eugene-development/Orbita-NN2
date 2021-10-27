export const state = () => ({
  visibleMobileMenu: false,
});

export const actions = {

  change_visibleMobileMenu({ commit, state }) {
    const visibleMobileMenu = !state.visibleMobileMenu;
    commit('VISIBLE_MOBILE_MENU', visibleMobileMenu);
  },

  close_visible({ commit }) {
    const visibleMobileMenu = false;
    commit('VISIBLE_MOBILE_MENU', visibleMobileMenu);
  },
};

export const mutations = {
  VISIBLE_MOBILE_MENU: (state, visibleMobileMenu) => state.visibleMobileMenu = visibleMobileMenu,
};

export const getters = {
  visibleMobileMenu: state => state.visibleMobileMenu,
};
