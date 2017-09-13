<template>
  <div id="app">
    <div id="header">
      <h2>English excersises</h2>
      <span class="menuitems">
    {{ user }}
      </span>
    <div class="menuitems">
    <span  v-for="item in menuItems" >
    
    <router-link  :to="item.link">  {{ item.title }}   </router-link> 
    
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
      if(this.$store.getters.user !== null)
      return this.$store.getters.user.displayName;
    },
    menuItems() {
      let menuItems = [
        { icon: 'upload', title: 'upload', link:'/UploadExcel'},
        { icon: 'signin', title: 'signin', link:'/SignIn'},
        { icon: 'home', title: 'home', link:'/'}
      ]
      return menuItems;
    }
  },
};
</script>

<style>
h1, h2 {
  font-weight: normal;
  width:50%;
  float:left;

}

h3 {
  float: right;
}

#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
}
#header{
      position: fixed;
    background: white;
    border: 1px solid #2c3e50;
    width: 100%;
    padding-left: 8px;
    margin-top: -22px;
    margin-left:-9px;
    float:left;
}
.router-view{
  padding-top: 60px;
}

.menuitems{
  margin-top:25px;
  margin-right:25px;
  float:right;
}
</style>
