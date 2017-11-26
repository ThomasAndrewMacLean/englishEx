import router from '../router';

export default {
  setUser(state, payload) {
    state.user = payload;
  },
  setNewEx(state, payload) {
    state.newEx = payload;
  },
  clearNewEx(state, payload) {
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
  setCurrentEx(state, payload) {
    state.currentEx = payload;
  },
  setCourses(state, payload) {
    // debugger;
    state.courses = payload;
  },
  selectLeft(state, payload) {
    // debugger;
    state.currentExById.leftselected = payload;
    // console.log(payload);
  },
  setCurrentExById(state, payload) {
    state.currentExById = payload;
  },
};
