import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    navigateToAfterSignin: null,
    newEx: null,
  },
  mutations,
  actions,
  getters,
});
