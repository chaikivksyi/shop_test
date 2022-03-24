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
        show_left_menu: true
    },
    getters: {
        isAuthorization: (state) => {return state.isAuthorization},
        pagePagination: (state) => {return state.pages},
        SHOW_MENU_LEFT: (state) => {return state.show_left_menu},
    },
    mutations: {
        get_user: (state, status) => {
            state.isAuthorization = status
        },
        set_user: (state, status) => {
            state.isAuthorization = status
        },
        toggle_left_menu: (state) => {
            state.show_left_menu = !state.show_left_menu
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
        },
        TOGGLE_LEFT_MENU: ({commit}) => {
            commit('toggle_left_menu')
        },
    }
})