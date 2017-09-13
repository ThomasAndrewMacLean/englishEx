<template>
<div>
Upload EXCEL
<input type="file" id="inputfile"/>

<button v-on:click="uploadToClient">JA</button>

<div v-for="a in newEx">
<input type="text" v-model="a.partA">

<input type="text" v-model="a.partB">
</div>

<button v-on:click="uploadToServer">UPLOADTODB</button>

</div>
</template>


<script>
    export default {

    methods: {
      uploadToClient() {
        var inputElement = document.getElementById('inputfile');
        this.$store.dispatch('uploadToClient', {file: inputElement.files[0]})
      },
      uploadToServer() {
        this.$store.dispatch('uploadToServer', this.newEx);
      }
    },
    computed: {
    newEx() {
      if(this.$store.getters.newEx !== null)
      return this.$store.getters.newEx;
    },
}}
</script>


<style>
    
</style>