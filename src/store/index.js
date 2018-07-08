import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        name: 'project1'
      },
      {
        name: 'project2'
      },
      {
        name: 'project3'
      }
    ]
  },
  getters: {
    projectsAll: state => state.projects
  }
})
