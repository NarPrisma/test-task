<template>
  <div v-if="showModal">
    <div class="pupup-modal modal-platform open">
      <div class="modal-platform-overlay"></div>
      <div class="modal-platform-card">
        <div class="modal-platform-body">
          <div class="close-button" @click="closeModal">
            x
          </div>
          <div class="modal-platform-header">
            <h3>Edit Project</h3>
          </div>
          <div class="modal-platform-content">
            <p>Name: {{ project.name }}</p>
            <div>
              <input  placeholder="New Project Name" v-model="newProjectName">
              <button type="submit" @click="editProjectName()">Edit</button>
            </div>
          </div>
          <img src="https://staging.postlater.io/assets/landing/img/icon-ellipse-2.svg" class="modal-icon-1">
          <img src="https://staging.postlater.io/assets/landing/img/icon-square-6.svg" class="modal-icon-2">
          <img src="https://staging.postlater.io/assets/landing/img/icon-polygon-1.svg" class="modal-icon-3">
          <img src="https://staging.postlater.io/assets/landing/img/icon-square-6.svg" class="modal-icon-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  data() {
    return {
      newProjectName: ''
    }
  },
  props: {
    project: {
      type: Object,
      default: () => {},
    },
    showModal: {
      type:Boolean,
      default:false
    }
  },
  methods: {
    editProjectName() {
      this.$emit('change-name', {
        id: this.project.id,
        name: this.newProjectName
      })
    },
    closeModal() {
      this.$emit('close-modal')
    }
  },
  destroyed() {
    this.$off('change-name')
    this.$off('close-modal')
  }
}
</script>

<style scoped>
.modal-platform.open {
  opacity: 1;
  visibility: visible;
}
.modal-platform,
.modal-platform-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.modal-platform,
.modal-platform-overlay {
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
}
.close-button{
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
}
.modal-platform {
  /*opacity: 0;*/
  overflow-x: unset;
  overflow-y: unset;
  transition: all .4s;
  /*visibility: hidden;*/
}
.modal-platform-overlay {
  background: rgba(0,0,0,.5);
}
.modal-platform-body {
  zoom: 90%;
  align-items: center;
  background: #fefdff;
  border-radius: 20px;
  height: fit-content;
  margin: auto;
  overflow: hidden;
  padding: 64px;
  position: relative;
  width: 776px;
  z-index: 101;
}
.modal-platform-content, .modal-platform-footer, .modal-platform-header {
  border-bottom: unset;
  padding: 0;
}
.modal-platform-header h3 {
  color: #8726e8;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
}
.modal-platform-content {
  margin: 0 auto;
  max-width: 488px;
}
.modal-platform-content p {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 32px 0 40px;
  text-align: justify;
  -moz-text-align-last: center;
  text-align-last: center;
}
input, textarea {
  outline: none;
}
.modal-platform-content div button {
  background: #8726e8;
  border: 1px solid #8726e8;
  border-radius: 42px;
  color: #fefdff;
  font-size: 18px;
  line-height: 24px;
  margin: 40px auto 24px;
  padding: 20px 32px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
.modal-platform-content div input {
  background: #fff;
  border: 1px solid #a6a6a6;
  border-radius: 100px;
  box-sizing: border-box;
  padding: 16px 24px;
}
.modal-platform-content div {
  display: flex;
  flex-direction: column;
}
.modal-platform-content p {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 32px 0 40px;
  text-align: justify;
  -moz-text-align-last: center;
  text-align-last: center;
}
.modal-platform-content p:last-child {
  color: #7b7392;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  margin: 0 0 40px;
  text-align: center;
}
.modal-platform-footer {
  position: relative;
}
.modal-platform-footer:before {
  background: #f6edff;
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  margin-top: 0;
  position: absolute;
  top: 0;
  transform: translateX(20%);
  width: 70%;
}
.modal-platform-footer div {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 40px auto 0;
  max-width: 540px;
  width: 100%;
}
.modal-platform-footer div div {
  width: -moz-fit-content;
  width: fit-content;
}
.modal-platform-footer div {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 40px auto 0;
  max-width: 540px;
  width: 100%;
}
.modal-platform .modal-icon-1 {
  height: 11px;
  left: 24%;
  position: absolute;
  top: 12%;
  width: 11px;
}
.modal-platform .modal-icon-2 {
  height: 14px;
  position: absolute;
  right: 12%;
  top: 21%;
  transform: rotate(39deg);
  width: 14px;
}
.modal-platform .modal-icon-3 {
  height: 26px;
  left: 7%;
  position: absolute;
  top: 29%;
  transform: rotate(39deg);
  width: 26px;
}
.modal-platform .modal-icon-4 {
  bottom: 35%;
  height: 14px;
  left: 20%;
  position: absolute;
  transform: rotate(39deg);
  width: 14px;
}
</style>

