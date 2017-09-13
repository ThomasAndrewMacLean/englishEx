import * as firebase from 'firebase';
import XLSX from 'xlsx';

export default{
  signUserIn({ commit }, payload) {
    const pthis = this;
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
      (user) => {
        const newUser = user;
        commit('setUser', newUser);
        const route = pthis.state.navigateToAfterSignin;
        commit('setRoute', route);
      },
    );
  },
  uploadToClient({ commit }, payload) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      workbook.SheetNames.forEach((sheetName) => {
            // const Xrowobject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        const Xrowobject = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        commit('setNewEx', Xrowobject);
      });
    };
    reader.readAsBinaryString(payload.file);
  },
  uploadToServer({ commit }, payload) {
    const ex = firebase.database().ref().child('exercises');
    ex.push(payload);
  },
};
