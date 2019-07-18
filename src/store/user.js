import useraxios from '../axios/user-axios';

export default {
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
    // getDetailsRoom: ({ rooms }) => roomId => rooms.find(room => room.id === roomId),
  },
  mutations: {
    ADD_USER(state, user) {
      state.users.push(user);
    },
  },
  actions: {
    addUser({ commit }, user) {
      useraxios.post('/users/', user)
        .then(res => console.log(res))
        .catch(error => console.log(error));
      commit('ADD_USER', user);
    },
  },
};
