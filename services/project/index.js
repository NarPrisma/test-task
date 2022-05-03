import {
  EDIT_PROJECT,

} from '@/utils/urls.js'
export default (axios) => ({
  async updateProject(data,id) {
    return await axios.$post(EDIT_PROJECT(id), data)
  },

})
