/* eslint-disable */
import * as firebase from 'firebase';
import XLSX from 'xlsx';

export default {
  signUserIn({
    commit
  }, payload) {
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
  uploadToClient({
    commit
  }, payload) {
    if (payload === 'newEx') {
      commit('setNewEx', []);
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, {
          type: 'binary'
        });
        workbook.SheetNames.forEach((sheetName) => {
          // const Xrowobject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
          const Xrowobject = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          commit('setNewEx', Xrowobject);
        });
      };
      reader.readAsBinaryString(payload.file);
    }
  },
  uploadToServer({
    commit
  }, payload) {
    var answer = payload;
    const answers = firebase.database().ref().child('answers');
    var x = answers.push(answer);
    const ex = firebase.database().ref().child('exercises/' + x.key);
    var temp = payload[1].partB;
    payload[1].partB = payload[0].partB;
    payload[0].partB = temp;
    var x = ex.set(payload);
    commit('clearNewEx', null);
    return x;
  },
  uploadToServerUnderCourse({
    commit
  }, payload) {
    const title = payload.title + '---' + Date.now();

    const answers = firebase.database().ref().child('answers/' + title);
    answers.set(payload.ex);

    const ex = firebase.database().ref().child('courses/' + payload.course + '/' + title);
    for (let i = 0; i < payload.ex.length; i++) {
      const r = Math.floor(Math.random() * (payload.ex.length - 1));
      var temp = payload.ex[r].partB;
      payload.ex[r].partB = payload.ex[i].partB;
      payload.ex[i].partB = temp;

    }

    ex.set(payload.ex);
    commit('clearNewEx', null);
  },
  getLessonById({
    commit
  }, payload) {
    firebase.database().ref().child('exercises').child(payload).on('value', (snapshot) => {
      var x = snapshot.val();
      commit('setCurrentExById', x);
    })
  },
  getLesson({
    commit
  }, payload) {
    // eslint-disable-next-line
    firebase.database().ref().child('exercises').on('value', (snapshot) => {
      console.log(payload);
      console.log(snapshot.val());
      const exs = [];
      const obj = snapshot.val();
      // eslint-disable-next-line 
      for (const key in obj) {
        exs.push({
          id: key,
        });
      }
      commit('setCurrentEx', exs);
    });
  },

  setCourses({
    commit
  }, payload) {
    // debugger
    // eslint-disable-next-line
    firebase.database().ref().child('courses').on('value', (snapshot) => {
      console.log(payload);
      console.log(snapshot.val());
      const exs = [];
      const obj = snapshot.val();
      // eslint-disable-next-line 
      for (const key in obj) {
        exs.push({
          id: key,
        });
      }
      commit('setCourses', exs);
    });
  },
  addCourse({
    commit
  }, payload) {
    //debugger;
    const courses = firebase.database().ref().child('courses/' + payload);
    courses.set(payload);
    // courses.push(payload);
  }
};
