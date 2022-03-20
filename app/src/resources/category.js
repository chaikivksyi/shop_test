import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5006/api/categories",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getAllCategories() {
        return apiClient.get(`/`);
    },
    // getProduct(id) {
    //     return apiClient.get(`/detail/${id}`);
    // },
    addCategory(category) {
        return apiClient.post(`/`, category)
    },
    deleteCategory(id) {
        return apiClient.delete(`/${id}`)
    }
};
