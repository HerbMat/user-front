import Vue from 'vue';
import Vuex from 'vuex';
import Users from './store/user';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    Users,
  },
});
