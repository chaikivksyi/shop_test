import api from './settings';
const path = '/products'

export default {
    getAllProducts() {
        return api.get(`${path}/`);
    },
    getProduct(id) {
        return api.get(`${path}/detail/${id}`);
    },
    addProduct(product) {
        return api.post(`${path}/`, product)
    },
    deleteProduct(id) {
        return api.delete(`${path}/${id}`)
    }
};
