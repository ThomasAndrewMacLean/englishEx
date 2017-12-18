<template>
  <div id="uploadExWrapper">
  
  
  Add New Course:

<input type="text" v-model="nameCourse"/>
<button  v-on:click="addCourse()">SUBMIT</button>

  <hr/>
Choose course to add exercise to:
  <select v-model="selectedCourse">
    <option disabled value="">Please select one</option>
    <option v-for="c in courses"> {{ c.id }} </option>
  </select><br/>
  Name off exercise:
    <input v-model="titleExercise" />
    <br/>
    <br/>
    <label for="inputfile">
      Upload file
      <input type="file" id="inputfile" @change="uploadToClient" style="display:none"/> 
    </label>
  <br/>
    <br/>
    <div v-for="a in newEx">
      <input type="text" v-model="a.partA">
      <input type="text" v-model="a.partB">
      <span v-on:click="removeLine(a)">x</span>
    </div>
   
    <br/>
    <button v-on:click="addLine">add line</button>
    <br/>
  
    <button v-on:click="uploadToServerUnderCourse">Upload exercise</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selectedCourse: "",
      titleExercise: "",
      nameCourse: ""
    };
  },
  methods: {
    addCourse() {
      //  debugger;
      this.$store.dispatch("addCourse", this.nameCourse);
      this.nameCourse = null;
    },
    removeLine(a) {
      var i = 0;
      for (var aa of this.newEx) {
        if (aa == a) {
          console.log(aa);
          this.newEx.splice(i, 1);
        }
        i++;
      }
    },
    addLine() {
      var a = {
        partA: "",
        partB: ""
      };
      if (!this.newEx) {
        this.$store.dispatch("uploadToClient", "newEx");
      }
      this.newEx.push(a);
    },
    uploadToClient() {
      var inputElement = document.getElementById("inputfile");
      this.$store.dispatch("uploadToClient", {
        file: inputElement.files[0]
      });
    },
    // uploadToServer() {
    //   this.$store.dispatch('uploadToServer', this.newEx).then(_=> {
    //    var inputElement = document.getElementById('inputfile').value = '';

    //   });
    // },
    uploadToServerUnderCourse() {
      this.$store
        .dispatch("uploadToServerUnderCourse", {
          ex: this.newEx,
          course: this.selectedCourse,
          title: this.titleExercise
        })
        .then(_ => {
          var inputElement = (document.getElementById("inputfile").value = "");
        });
    }
  },
  computed: {
    newEx() {
      if (this.$store.getters.newEx !== null) return this.$store.getters.newEx;
    },
    courses() {
      this.$store.dispatch("getCourses", "blablabb");
      if (this.$store.getters.courses !== null)
        return this.$store.getters.courses;
    }
  }
};
</script>


<style>
#uploadExWrapper {
}
label {
  text-decoration: underline;
  cursor: pointer;
}
</style>