import {find, forEach} from "lodash";

export const state = () => ({
  allHeads: [],
  head: [],
  headID: null,

  apiCRUD: { baseURL: process.env.API_CRUD }
});

export const actions = {

  async getHeads ({ commit, state}) {
    const { data } = await this.$axios.$get('get-all-head', state.apiCRUD);
    // const { data } = await this.$axios.$get('get-all-head-rubric', state.apiCRUD);
    commit('ALL_HEADS', data);
  },

  async getHead({commit, state}, payload) {

    const heads = await this.$axios.$get('get-all-head', state.apiCRUD);
    forEach(heads, function (value) {
      const {id} = find(value, {'slug': payload.slug});
      commit('HEAD_ID', id);
    });

    const { data } = await this.$axios.$get('get-head/' + state.headID, state.apiCRUD);
    // const { data } = await this.$axios.$get('get-all-head-rubric', state.apiCRUD);
    // const head = find(data, {'slug': payload.slug});

    console.log(data)

    commit('HEAD', data);
  },
};

export const mutations = {
  ALL_HEADS: (state, data) => state.allHeads = data,
  HEAD: (state, data) => state.head = data,
  HEAD_ID: (state, id) => state.headID = id,
};

export const getters = {
  allHeads: state => state.allHeads,
  head: state => state.head,
};
