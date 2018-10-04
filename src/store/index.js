import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 3,
        name: 'Random name generator',
        description: 'Random name generator based on letters frequency',
        used: ['jQuery', 'Zurb Foundation'],
        github: 'https://github.com/svmi3195/random_name_generator',
        live: 'http://random-name-gen.surge.sh/'
      },
      { id: 1,
        name: 'Restaurant Reviews',
        description: 'Project made during Udacity Mobile Web Specialist course',
        used: ['Flexbox', 'Service worker', 'IndexedDB', 'Background sync'],
        github: 'https://github.com/svmi3195/mws-restaurant-reviews',
        live: null
      },
      { id: 2,
        name: 'Bears 15 Cards',
        description: 'Flashcards application made in collaboration with two other coders',
        used: ['Flexbox', 'Vue.js', 'Vuex', 'MongoDb'],
        github: 'https://github.com/chingu-voyage4/Bears-Team-15',
        live: 'https://cards-bears-15.herokuapp.com/'
      },
      { id: 4,
        name: 'Game of Life',
        description: 'Implementation of Conway\'s Game of Life',
        used: ['HTML5 canvas', 'vanilla JS'],
        github: 'https://github.com/svmi3195/freecodecamp_projects/tree/master/game-of-life',
        live: 'https://codepen.io/svmi3195/full/vJbKgO/'
      }
    ],
    contacts: [
      {
        name: 'Github',
        link: 'https://github.com/svmi3195'
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/svmi-02004019/'
      },
      {
        name: 'Medium',
        link: 'https://medium.com/@svmi3195'
      }
    ]
  },
  getters: {
    projectsAll: state => state.projects,
    projectsSorted: state => state.projects.sort((a, b) => a.id - b.id),
    contactsAll: state => state.contacts
  }
})
