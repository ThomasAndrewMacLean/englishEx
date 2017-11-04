<template>
<div>
  <div v-for="x in lesson">
    <div v-for="xss in x"> 
      <button v-on:click="getEx(xss)">{{ xss }}</button>
    </div>
  </div>
  <button v-on:click="te">get</button>

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
            
      </div>
    </div>
  </div>
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
        te () {
          this.$store.dispatch('getLesson', this.$route.params.LessonNr);
        },
        getEx (id) {
          this.$store.dispatch('getLessonById', id);
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
        lesson() {
          this.$store.dispatch('getLesson', this.$route.params.LessonNr);

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