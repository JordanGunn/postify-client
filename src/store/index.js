import {createStore} from 'vuex'

export default createStore({
    state: {
        authenticated: false
    },
    mutations: {
        SET_AUTH: (authenticated , auth) => this.state.authenticated = auth
    },
    actions: {
        // here !!!!
        setAuth: ({ commit }, auth) => commit('SET_AUTH', auth)
    },
    modules: {}
})