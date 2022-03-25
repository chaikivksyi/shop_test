import api from './settings';
const path = '/products'

export default {
    getAllProducts(page, limit = 5 , category = 'all') {
        return api.get(`${path}/?page=${page}&limit=${limit}&category=${category}`);
    },
    getProduct(id) {
        return api.get(`${path}/detail/${id}`);
    },
    addProduct(product) {
        return api.post(`${path}/`, product)
    },
    deleteProduct(id) {
        return api.delete(`${path}/${id}`)
    },
    updateProduct(id, product) {
        return api.put(`${path}/${id}`, product)
    },
    uploadImage(file) {
        return api.post(`${path}/upload-image`, file);
    }
};
