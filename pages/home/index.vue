<template>
  <div class="projects">
    <div  v-for="(project,index) in projects" :key="index" @click="openModal(project)" class="project-item">
      <div>
        <img :src=project.logo_url width="60" height="60" alt="image">
      </div>
      <div><h3>{{project.name}}</h3></div>
      <div>
        <h3 v-if="project.is_active">Active</h3>
        <h3 v-else>Not active</h3>
      </div>
      <div>
        <p>this time week</p>
        <p>this month</p>
        <p>total</p>
      </div>
      <div v-if="!project.spent_sec_all_time">
        <p v-for="item in times" >{{item}}</p>
        </div>
      <div  v-else>
        <p v-for="item in project.spent_sec_all_time.length">{{item}}</p>
      </div>
    </div>
    <base-modal :showModal="showModal" :project="project" @change-name="changeName($event)" @close-modal="showModal = false"/>
  </div>
</template>

<script>
import BaseModal from "@/components/Base/BaseModal";
import NotificationsMixin from "@/mixins/notificationsMixin";

export default {
  name: 'home',
  layout: 'app',
  mixins : [NotificationsMixin],
  components: {
    BaseModal
  },
  data() {
    return {
      projects:[],
      project: '',
      showModal: false,
      isActive:true,
      times:["00:00:00", "00:00:00", "00:00:00"]
    }
  },
  async fetch() {
    await this.getUserProjects()
  },
  methods: {
    async getUserProjects() {
      const { data } = await this.$axios.get('/projects-manage/index');
      this.projects = data.projects;
    },
    openModal(project) {
      this.project = project;
      this.showModal = true;
    },
    async changeName({ id, name }) {
      try {
        const changeProject = await this.$services.project.updateProject({name},id)
        this.notifySuccess({
          text:'Project has been updated successfully'
        });
        this.projects.find((item) => {
          if (item.id === id) {
            item.name = name
          }
        });
      }
      catch (e) {
        this.notifyError({
          text:'Something went wrong'
        })
      }
    }
  }
}
</script>

<style scoped>

.projects {
  max-width: 1100px;
  margin: 40px auto;
}
.project-item {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #eee;
  background: white;
  display: flex;
  align-items: center;
}
.project-item > div {
  padding: 10px;
}
.project-item div:first-child {
  width: 20%;
}
.project-item div:nth-child(2) {
  width: 40%;
}
.project-item div:nth-child(3){
  width: 20%;
}
.project-item div:nth-child(4),
.project-item div:nth-child(5) {
  width: fit-content;
}

</style>
