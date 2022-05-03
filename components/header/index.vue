<template>
  <div class="topnav">
    <a class="active" href="">Projects</a>
    <a @click="logout">Log Out</a>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      window.location.reload()
    }
  }
}
</script>
