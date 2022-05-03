export default {
  methods: {
    notifySuccess(options = {}) {
      this.$notify({
        group: 'app',
        type: 'success',
        title: 'Success!',
        ...options,
      })
    },

    notifyError(options = {}) {
      this.$notify({
        group: 'app',
        type: 'error',
        title: 'Whoops!',
        ...options,
      })
    },
  },
}
