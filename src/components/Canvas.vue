<template>
<div>
<br>
Canvas<br>
 <input type="range" min="0" max="255" step="15" v-model="r" v-on:change="redraw">
 <input type="range" min="0" max="255" step="15" v-model="g" v-on:change="redraw">
 <input type="range" min="0" max="255" step="15" v-model="b" v-on:change="redraw">
 <input type="range" min="0" max="255" step="15" v-model="a" v-on:change="redraw">
 <br>
 
<canvas id='canvas'></canvas>
<br>
r:{{r}}
g:{{g}}
b:{{b}}
a:{{a}}
<br>
<button v-on:click="saveColor()">save</button>
<br>
</div>
</template>

<script>
export default {
  name: 'Canvas',
  methods:{
      saveColor(){


var a  = {r: this.r, g:this.g,b:this.b,a:this.a};
localStorage.colors=(JSON.stringify(a));
const btn = document.createElement("p");
btn.style.margin='5px';
btn.style.height='50px';
btn.style.width='50px';
btn.style.float='left'
btn.onclick  = function () {
    this.parentElement.removeChild(this);
};
btn.style.background=`rgba(${this.r},${this.g},${this.b},${this.a})`
document.body.appendChild(btn);
console.log('ok')
      },
    redraw(){
      //  debugger;
        const ctx = document.getElementById('canvas').getContext('2d');
        const data = ctx.getImageData(0,0,300,150);
        for(let x = 0; x < 180000; x+=4){ 
            data.data[x] = this.r; 
            data.data[x+1] = this.g;  
            data.data[x+2] = this.b; 
            data.data[x+3] = this.a; 
  }ctx.putImageData(data,0,0);
    }  ,
addCourse(){
//  debugger;
  this.$store.dispatch('addCourse', this.nameCourse);
  this.nameCourse=null;
  }
  },data:{
     
  },
  data() {
    return {
            nameCourse:'',

      msg: 'Welcome to Your Vue.js App',
 r:255,
      g:255,
      b:255,
      a:255
    };
  },
  computed:{
    courses() {
      // debugger;
      this.$store.dispatch('setCourses', "blablabb");
      if(this.$store.getters.courses !== null)
        return this.$store.getters.courses;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas{outline:3px solid black}
</style>
