import productsResources from "@/resources/products";
import categoriesResources from "@/resources/category";

export default {
    namespaced: true,
    state: {
        all: [],
        categories: [],
        count_products: 0,
        pages: {
            number: 1,
            limit: 5
        },
        product: {
            title: '',
            price: 0,
            category: '0',
            img: 'default.jpg'
        },
        type_fields: [
            {head: 'Title', label: 'title',},
            {head: 'Price', label: 'price',},
            {head: 'Category', label: 'category',},
        ],
        show_popup: false,
        loader: false,
    },
    getters: {
        ALL: (state) => state.all,
        CATEGORIES: (state) => state.categories,
        COUNT_PAGES: (state) => Math.ceil(state.count_products / state.pages.limit),
        PRODUCT: (state) => state.product,
        SHOW_POPUP: (state) => state.show_popup,
        FIELDS: (state) => state.type_fields,
        LOADER: (state) => state.loader,
    },
    mutations: {
        set_products: (state, obj) => {state.all = obj},
        set_categories: (state, obj) => {state.categories = obj},
        set_count_products: (state, obj) => {state.count_products = obj},
        add_product: (state, obj) => {state.product = obj},
        toggle_popup: (state, status) => {state.show_popup = status}
    },
    actions: {
        GET_ALL: ({commit, state}) => {
            let urlParams = new URLSearchParams(window.location.search);
            const page = urlParams.get('page') ? urlParams.get('page') : 1;
            productsResources.getAllProducts(page, state.pages.limit)
                .then(response => {
                    commit('set_products', response.data.obj);
                    commit('set_count_products', response.data.count);
                }).catch(error => {
                    console.log(error)
                })
            categoriesResources.getAllCategories().then(response => {
                commit('set_categories', response.data);
            })
        },
        ADD: ({commit, dispatch}, payload) => {
            productsResources.addProduct(payload).then(() => {
                commit('add_product', {
                    title: '',
                    price: 0,
                    category: '0',
                    img: 'default.jpg'
                });
                dispatch('GET_ALL', {page: 1, limit: 5});
                commit('toggle_popup', false)
            }).catch(err => {
                console.log(err)
            });
        },
        REMOVE: ({dispatch}, id) => {
            productsResources.deleteProduct(id).then(() => {
                dispatch('GET_ALL', {page: 1, limit: 5});
              }).catch(err => {
                console.log(err)
              });
        },
        TOGGLE_POPUP: ({commit}, payload) => {commit('toggle_popup', payload)},
    }
};