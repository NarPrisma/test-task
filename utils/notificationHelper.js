import Vue from 'vue'
import login from "@/pages/auth/login";
export function notifySuccess(text = {}) {
  Vue.prototype.$notify({
    group: 'app',
    type: 'success',
    title: 'Success!',
    text,
  })
}

export function notifyError(text = {}) {
  Vue.prototype.$notify({
    group: 'app',
    type: 'error',
    title: 'Whoops!',
    text,
  })
}
