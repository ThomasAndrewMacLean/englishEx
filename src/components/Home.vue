<template>
<div>
  <div class="hello">
    helllooo

    {{ msg }}
  </div>
<hr/>
LIJST
<hr/>

  <div v-for="c in courses" class="course" v-on:click="goToCourse(c.id)">
{{c.id}}
  </div>


</div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goToCourse(name) {
      this.$router.push("Lesson/" + name);
    },
    
    test() {
      return 78;
    }
  },
  data: {},
  data() {
    return {
     

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
