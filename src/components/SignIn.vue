<template>
<div>
 <br/><br/><br/><br/><br/><br/><br/><br/>
    <form @submit.prevent="signUserIn">
            
                    <input
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required/>
                        <input
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required/>
                
                    <button type="submit">SIGNIN</button>
              </form>
</div>
</template>

<script>
export default {
  name: 'signIn',
  data() {
    return {
      email: '',
      password: '',
    };
  },
    methods: {
      signUserIn () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password});
      },
}}
</script>