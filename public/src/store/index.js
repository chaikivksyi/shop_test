import Vuex from 'vuex'

import Products from './moduleProducts'

export default new Vuex.Store({
    modules: {
        PRODUCTS: Products
    },
    state: {},
    getters: {
        pagePagination: (state) => {
            return state.pages
        },
    }
    })