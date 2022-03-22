import Vuex from 'vuex'
import authResources from '@/resources/auth'
// import router from "@/router/router";
import Products from './moduleProducts'

export default new Vuex.Store({
    modules: {
      PRODUCTS: Products
    },
    state: {
        isAuthorization: true,
        pages: {
            // page: router.currentRoute.query,
            // limit: router.query || 5
        }
    },
    getters: {
        isAuthorization: (state) => {return state.isAuthorization},
        pagePagination: (state) => {return state.pages},
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