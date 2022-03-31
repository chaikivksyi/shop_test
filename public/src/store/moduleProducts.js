
export default {
    state: {
        categories: [],
        count_products: 0,
        pages: {
            number: 1,
            limit: 5
        },
    },
    getters: {
        COUNT_PAGES: (state) => Math.ceil(state.count_products / state.pages.limit),
    },
    mutations: {
        set_count_products: (state, obj) => {state.count_products = obj},
    },

};