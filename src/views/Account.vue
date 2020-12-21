<template>
    <div>
        <h3>User Login/Registration</h3>
        <form @submit.prevent="OnLogin">
            <div class="form-group">
                <label for="userSigninLogin">Email</label>
                <input name="login" type="text" class="form-control" id="userSigninLogin" placeholder="Enter your email" v-model="login">
            </div>
            <div class="form-group">
                <label for="userSigninPassword">Password</label>
                <input name="password" type="password" class="form-control" id="userSigninPassword" placeholder="Enter your password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
<p >{{ reply }}</p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      login: '',
      password: '',
      reply: '',
      errors: []
    }
  },

  methods: {
    OnLogin () {
      this.addStore(this.$store)
      axios.get('http://localhost:8080/octobercms/api/v1/login', {
        params: {
          login: this.login,
          password: this.password
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          this.storeToken(response.headers.authorization)
          // console.log(response.headers.authorization)
          this.reply = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    storeToken (bearerHeader) {
      const parts = bearerHeader.split(' ')
      if (parts.length === 2) {
        const scheme = parts[0]
        const token = parts[1]
        if (/^Bearer$/i.test(scheme)) {
          this.store.dispatch('login', token)
        }
      }
    },
    addStore (store) {
      this.store = store
    }
  }
}
/* export default {
  data () {
    return {
      apiRequest: new this.$request({
        login: '',
        password: ''
      }),
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    OnLogin () {
      this.apiRequest.addStore(this.$store)
      this.apiRequest.post('login')
        .then((response) => {
          this.successMessage = response
          this.errorMessage = ''
        })
        .catch((errors) => {
          this.errorMessage = errors
          this.successMessage = ''
        })
    }
  }
} */
</script>
