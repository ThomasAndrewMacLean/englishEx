<template>
<div>


  <div v-if="!this.$route.params.CourseName">
  route
    <div v-for="c in courses" v-on:click="goToCourse('Lesson/' +c.id)">
      {{c.id}}
    </div>
  </div>
 <div v-if="this.$route.params.CourseName">
 
  <nav class="navEx">
    <div v-for="x in lesson" >
      <div v-for="xss in x"> 
        <button v-on:click="getEx(xss)">{{ xss.split('---')[0] }}</button>
      </div>
    </div>
  </nav>

<div class="exWrap">
  <div v-for="x in exbusy">
    <div class="kotteke-wrapper left">
    <div  class="kotteke"   
          v-on:click="klikOpKotteke(x, 'leftselected');"
            v-bind:class="{ 'leftselected': x.leftselected}" >
          
            {{ x[Object.keys(x)[0]] }}

    </div>
    </div>
    <div class="kotteke-wrapper right">
      <div  class="kotteke" 
          v-on:click="klikOpKotteke(x, 'rightselected')"
          v-bind:class="{ 'rightselected' : x.rightselected }" >
          
            {{ x[Object.keys(x)[1]] }}
            
      </div> </div>
    </div>
  </div>  </div>
</div>
</template>

<script>
    export default{
      data() {
        return {
          exbusy:null
        }
      },
      methods: {
      goToCourse(subPath) {
        this.$router.push(subPath);
      },
        getEx (id) {
          this.$store.dispatch('getLessonById',this.$route.params.CourseName + '/' +  id);
           if (this.$store.getters.currentExById != null){
             this.exbusy = this.$store.getters.currentExById;
           
           }
          },
        klikOpKotteke (line, leftRight) {
          for(var xx in this.exbusy) {
            if(this.exbusy[xx] == line) {
              this.exbusy[xx][leftRight]= ! this.exbusy[xx][leftRight] //dees werkt
            }
          }
          line[leftRight] = line[leftRight];
          this.$forceUpdate();
        }
      },
  
      computed: {
      
    courses() {
      // debugger;
      this.$store.dispatch('getCourses', "blablabb");
      this.exbusy = null;

      if(this.$store.getters.courses !== null)
        return this.$store.getters.courses;
    },
        lesson() {
          // debugger;
          this.$store.dispatch('getLessonsByCourse', this.$route.params.CourseName);

          if (this.$store.getters.currentEx != null)
          return this.$store.getters.currentEx;
        },
        exx() {
          if (this.$store.getters.currentExById != null)
            return this.$store.getters.currentExById;
        }
      }
    }
</script>


<style>

.navEx{
  width:99px;
  float:left;
  border-right:1px solid grey;
  height:calc(100vh - 60px);
}

.exWrap{
  float:left;
  width:calc(100vw - 100px);
  
}

.kotteke-wrapper{
width:50%; 

// float:left;
}
.kotteke{
outline: 1px solid lightgrey;
margin:4px;
padding:4px;
  
}
.leftselected{
  background: green;
}
.rightselected{
  background: blue;
}
.left{float:left;
clear:left;}
.right{float:right;clear:right;}
</style>