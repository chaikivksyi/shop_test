import Vuex from 'vuex'
import authResources from '@/resources/auth'

export default new Vuex.Store({
    namespaced: true,
    state: {
        isAuthorization: true
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
            authResources.userToken().then(() => {
                commit('get_user', true);
            }).catch(() => {
                commit('get_user', false);
            })
        },
        SET_USER: ({commit}, payload) => {
            commit('set_user', payload)
        }
    }
})