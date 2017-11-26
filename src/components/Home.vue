<template>
<div>
  <div class="hello">
    helllooo

    {{ msg }}
  </div>
<hr/>
LIJST
<hr/>

  <div v-for="c in courses" v-on:click="goToCourse(c.id)">
{{c.id}}
  </div>

  <hr/>
  INPUT
  <hr/>

<input type="text" v-model="nameCourse"/>
<button  v-on:click="addCourse()">SUBMIT</button>
</div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goToCourse(name) {
      this.$router.push("Lesson/" + name);
    },
    addCourse() {
      //  debugger;
      this.$store.dispatch("addCourse", this.nameCourse);
      this.nameCourse = null;
    }
  },
  data: {},
  data() {
    return {
      nameCourse: "",

      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    courses() {
      // debugger;
      this.$store.dispatch("getCourses", "blablabb");
      if (this.$store.getters.courses !== null)
        return this.$store.getters.courses;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
