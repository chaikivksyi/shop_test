import api from './settings';
const path = '/users'

export default {
    getAllUsers() {
        return api.get(`${path}/`);
    },
    // getProduct(id) {
    //     return api.get(`${path}/detail/${id}`);
    // },
    addUser(category) {
        return api.post(`${path}/`, category)
    },
    deleteUser(id) {
        return api.delete(`${path}/${id}`)
    }
};
