import { find } from "lodash";

export const state = () => ({
  allHeads: [],
  head: [],
  apiCRUD: { baseURL: process.env.API_CRUD }
});

export const actions = {
  async getHeads ({ commit, state}) {
    const { data } = await this.$axios.$get('get-all-head-rubric', state.apiCRUD);
    commit('ALL_HEADS', data);
  },
  async getHead({commit, state}, payload) {
    const { data } = await this.$axios.$get('get-all-head-rubric', state.apiCRUD);
    const head = find(data, {'slug': payload.slug});
    commit('HEAD', head);
  },
};

export const mutations = {
  ALL_HEADS: (state, data) => state.allHeads = data,
  HEAD: (state, head) => state.head = head,
};

export const getters = {
  allHeads: state => state.allHeads,
  head: state => state.head,
};
