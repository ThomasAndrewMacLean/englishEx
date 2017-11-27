<template>
  <div id="uploadExWrapper">
  
  <select v-model="selectedCourse">
    <option disabled value="">Please select one</option>
    <option v-for="c in courses"> {{ c.id }} </option>
  </select>
    <input v-model="titleExercise" />
    <br/>
    <input type="file" id="inputfile" @change="uploadToClient" />
  
    <div v-for="a in newEx">
      <input type="text" v-model="a.partA">
      <input type="text" v-model="a.partB">
      <span v-on:click="removeLine(a)">x</span>
    </div>
    {{ titleExercise }}
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
      titleExercise: ""
    };
  },
  methods: {
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
</style>