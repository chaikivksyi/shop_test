import api from './settings';
const path = '/auth'

export default {
    registerUser(user) {
        return api.post(`${path}/register`, user);
    },
    loginUser(user) {
        return api.post(`${path}/login`, user, {withCredentials: true });
    },
    userLogout() {
        return api.get(`${path}/logout`,{withCredentials: true });
    },
    userToken() {
        return api.get(`${path}/user`, {withCredentials: true });
    }
};
