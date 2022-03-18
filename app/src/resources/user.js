import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5006/api/products",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getAllProducts() {
        return apiClient.get(`/`);
    },
    getProduct(id) {
        return apiClient.get(`/detail/${id}`);
    },
    addProduct(product) {
        return apiClient.post(`/`, product)
    },
    deleteProduct(id) {
        return apiClient.delete(`/${id}`)
    }
};
