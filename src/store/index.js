export const state = () => ({
});

export const mutations = {
};

export const actions = {
  async nuxtServerInit({dispatch}){
    await dispatch('catalog/head/getHeads');
    await dispatch('user/createUUID');
  }
};

export const getters = {
};

