import Vuex from 'vuex'

export default new Vuex.Store({
    namespaced: true,
    state: {
        isAuthorization: false
    },
    getters: {
        isAuthorization: (state) => {return state.isAuthorization},
    },
    mutations: {
        get_user: (state, status) => {
            state.isAuthorization = status
        },
        set_user: (state, status) => {
            state.isAuthorization = status
        }
    },
    actions: {
        GET_USER: ({commit}) => {
            commit('get_user', localStorage.getItem('user'));
        },
        SET_USER: ({commit}, payload) => {
            commit('set_user', payload)
        },
    }
})