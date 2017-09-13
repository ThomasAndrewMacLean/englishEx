import router from '../router';

export default{
  setUser(state, payload) {
    state.user = payload;
  },
  setNewEx(state, payload) {
    state.newEx = payload;
  },
  setNavigateToAfterSignin(state, payload) {
    state.navigateToAfterSignin = payload;
  },
  setRoute(state, payload) {
    if (payload === null) {
      payload = '/';
    }
    router.push(payload);
    state.navigateToAfterSignin = null;
  },
};
