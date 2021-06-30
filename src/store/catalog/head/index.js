export const state = () => ({
  allHeads: [],
  apiCRUD: { baseURL: process.env.API_CRUD }
});

export const actions = {
  async getHeads ({ commit, state}) {
    const { data } = await this.$axios.$get('get-all-head-rubric', state.apiCRUD);
    commit('ALL_HEADS', data);
  },
};

export const mutations = {
  ALL_HEADS: (state, data) => state.allHeads = data,
};

export const getters = {
  allHeads: state => state.allHeads,
};
