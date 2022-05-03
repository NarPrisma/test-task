import services from '~/services/services'

export default ({ $axios }, inject) => {
  inject('services', services($axios))
}
