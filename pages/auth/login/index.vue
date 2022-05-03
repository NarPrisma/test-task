<template>
  <div>
    <ValidationObserver v-slot="{ invalid }">
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login" @submit.prevent="submit">
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <TextField placeholder="User name / Email"  type="email" v-model="form.email" rules="email|required"/>
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <TextField placeholder="Password" type="password" v-model="form.password" rules="required"/>
            </div>
            <button class="button login__submit" :disabled="invalid">
              <span class="button__text">Log In Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import TextField from "@/components/TextField";
export default {
  name: 'IndexPage',
  components: {
    TextField,
    ValidationObserver
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async submit() {
      const response = await this.$axios.post('/auth/login', this.form);
      if (response.status === 200) {
        await this.$auth.loginWith('simple', { data: this.form })
      }
    }
  }
}
</script>
