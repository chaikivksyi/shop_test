import api from './settings';
const path = '/categories'

export default {
    getAllCategories() {
        return api.get(`${path}/`);
    },
    // getProduct(id) {
    //     return api.get(`${path}/detail/${id}`);
    // },
    addCategory(category) {
        return api.post(`${path}/`, category)
    },
    deleteCategory(id) {
        return api.delete(`${path}/${id}`)
    }
};
