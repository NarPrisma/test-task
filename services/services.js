
import ProjectService from '@/services/project'
export default (axios) => ({
  project: ProjectService(axios)
})
