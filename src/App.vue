<template>
  <div id="app">
    <div id="header">
      <!-- <h2>English excersises</h2> -->
      <span class="menuitems float-right">
    {{ user }}
      </span>
    <div class="menuitems">
    <span  v-for="item in menuItems"  class="menu-item">
    
    <router-link  :to="item.link" >  {{ item.title }}   </router-link> 
    
    </span>
    </div>
    </div>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //user: this.$store.user,
    };
  },
  computed: {
    user() {
      if (this.$store.getters.user !== null)
        return this.$store.getters.user.email;
    },
    menuItems() {
      let menuItems = [
        // { icon: 'signin', title: 'signin', link:'/SignIn'},
        { icon: "home", title: "home", link: "/Home" },
        { icon: "lesson", title: "lesson", link: "/Lesson" },
        { icon: "upload", title: "upload", link: "/UploadExcel" }
        // { icon: 'canvas', title: 'canvas', link:'/Canvas'}
      ];
      return menuItems;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
h1,
h2 {
  font-weight: normal;
  width: 200px;
  float: left;
}

h3 {
  float: right;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
#header {
  position: fixed;
  background: white;
  border: 1px solid #2c3e50;
  background: antiquewhite;
  width: 100%;
  height: 40px;
  float: left;
}
.router-view {
  padding: 60px 40px;
  background: aliceblue;
  height: calc(100vh - 120px);
}

.menuitems {
  margin-right: 25px;
  height: 40px;
  display: flex;
  align-items: center;
  float: left;
}
.float-right {
  float: right;
}

.menu-item {
}
.menu-item:hover {
  background: goldenrod;
}
.router-link-active {
  color: red;
  background: greenyellow;
}
router-link {
  height: 100%;
  background: red;
}
.menu-item a {
  height: 40px;
  line-height: 40px;
  padding: 9px 15px;
}
</style>
