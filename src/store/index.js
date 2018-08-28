import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        name: 'Random name generator',
        description: 'Random name generator based on letters frequency',
        used: ['jQuery', 'Foundation']
      },
      { id: 2,
        name: 'MWS Restaurants Reviews',
        description: 'Project made during Udacity/Google Scholarship course',
        used: ['Flexbox', 'Service worker', 'IndexedDB', 'Background sync']
      }
    ]
  },
  getters: {
    projectsAll: state => state.projects
  }
})
