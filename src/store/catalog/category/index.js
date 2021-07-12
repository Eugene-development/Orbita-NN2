import {forEach} from 'lodash';
import {find} from 'lodash';

export const state = () => ({
  allCategories: [],
  products: [],
  pathAWS: '',
  rubricId: null,

  pathAWSBucket: {
    path: process.env.IMAGE_PRODUCTS
  },
  apiCRUD: {
    baseURL: process.env.API_CRUD
  }
  // apiCRUD: { baseURL: 'http://localhost:7788/' }
});

export const actions = {

  async getCategories({commit, state}, payload) {

    //TODO токены

    // await this.$axios.setToken('1', 'Bearer')
    // this.$axios.setHeader('Authorization', '1');
    // this.$axios.setToken('1');




    //TODO а как на счёт искать по слагу на бэке?
    //Получил Id категории по слагу в пейлоаде
    const rubrics = await this.$axios.$get('get-all-rubric', state.apiCRUD);

    forEach(rubrics, function (value) {
      const {id} = find(value, {'slug': payload.slug});
      commit('RUBRIC_ID', id);
    });

    const {data} = await this.$axios.$get('get-where-rubric-category-count-text/' + state.rubricID, state.apiCRUD);
    // const rubricID = payload.id;
//TODO Слабое место. Баг при перезагрузке
    commit('ALL_CATEGORIES', data);
    // commit('RUBRIC_ID', rubricID);
  },

  async getProducts({commit, state}, payload) {
    const pathAWS = state.pathAWSBucket.path
    commit('PATH_AWS', pathAWS)





    // await this.$axios.setToken('1', 'Bearer')



    const {data} = await this.$axios.$get('get-where-rubric-category-count-text/' + state.rubricID, state.apiCRUD);
    const slugCategory = payload.slug;
    forEach(data, function (value) {
      const products = find(value.category, {'slug': slugCategory});
      commit('PRODUCTS', products);
    });
  },
};


export const mutations = {
  ALL_CATEGORIES: (state, data) => state.allCategories = data,
  PRODUCTS: (state, data) => state.products = data,
  RUBRIC_ID: (state, id) => state.rubricID = id,
  PATH_AWS: (state, pathAWS) => state.pathAWS = pathAWS,

};

export const getters = {
  allCategories: state => state.allCategories,
  products: state => state.products,
  pathAWS: state => state.pathAWS,
};
