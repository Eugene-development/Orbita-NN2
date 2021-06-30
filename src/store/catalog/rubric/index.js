import {find} from 'lodash';


export const state = () => ({
  head: [],
  apiCRUD: {baseURL: process.env.API_CRUD}
});

export const actions = {
  async getHead({commit, state}, payload) {

    const { data } = await this.$axios.$get('get-all-head-rubric', state.apiCRUD);
    const head = find(data, {'slug': payload.slug});
    commit('HEAD', head);

    // console.log(rubric)
  },
};

export const mutations = {
  HEAD: (state, head) => state.head = head,
};

export const getters = {
  head: state => state.head,
};
