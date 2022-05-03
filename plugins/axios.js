import { notifyError } from '~/utils/notificationHelper'
export default function (source) {
  source.$axios.onError(async (error) => {
    if (
      typeof error.response?.data?.errors === 'string' ||
      Array.isArray(error.response?.data?.errors)
    ) {
      typeof error.response.data.errors === 'string'
        ? notifyError(error.response.data.errors)
        : Object.keys(error.response?.data.errors).forEach((err) => {
            notifyError(error.response.data.errors[err][0])
          })
    } else {
      notifyError(
        error.response.data.error ||
          error.response.data.errors?.verify_2fa ||
          error.response.data.message ||
          error.response.message ||
          'Something Went Wrong !'
      )
    }

    if (error.response.status === 401) {
      await source.$auth.logout().then((res) => {
        source.redirect('/auth/login')
      })
    }

    return Promise.reject(error.response)
  })
}
