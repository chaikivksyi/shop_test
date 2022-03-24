import productsResources from "@/resources/products";
import categoriesResources from "@/resources/category";
import Note from "@/mixins/note";

const default_product = {
    title: '',
    price: 0,
    category: '0',
    img: 'default.jpg'
}

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
        product: default_product,
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
        set_product: (state, obj) => {state.product = obj},
        toggle_popup: (state, status) => {
            state.show_popup = status
            state.product = default_product
        }
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
        GET_PRODUCT: ({commit}) => {
            const pathname = window.location.pathname;
            const id = pathname.substring(pathname.lastIndexOf('/') + 1)
            productsResources.getProduct(id).then(response => {
                commit('set_product', response.data)
            }).catch(err => {
                console.log(err)
            });
            categoriesResources.getAllCategories().then(response => {
                commit('set_categories', response.data);
            })
        },
        ADD: ({commit, dispatch}, payload) => {
            productsResources.addProduct(payload.product).then(() => {
                productsResources.uploadImage(payload.file).then(() => {
                    commit('set_product', default_product);
                    dispatch('GET_ALL', {page: 1, limit: 5});
                    commit('toggle_popup', false)
                    Note('Product added!!!')
                })
            }).catch(err => {
                console.log(err)
            });
        },
        REMOVE: ({dispatch}, id) => {
            productsResources.deleteProduct(id).then(() => {
                dispatch('GET_ALL');
                Note('Product removed!!!', 'danger')
              }).catch(err => {
                console.log(err)
              });
        },
        UPDATE: (context, payload) => {
            productsResources.uploadImage(payload.file).then(() => {
                productsResources.updateProduct(payload.product._id, payload.product).then(() => {
                    Note('Product updated!!!')
                })
            })
        },
        TOGGLE_POPUP: ({commit}, payload) => {commit('toggle_popup', payload)},
    }
};