import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        projects: [
            {
                name: project1
            },
            {
                name: project2
            },
            {
                name: project3
            }
        ]
    }
})