import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5006/api/auth",
    credentials: 'include',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

export default {
    registerUser(user) {
        return apiClient.post(`/register`, user);
    },
    loginUser(user) {
        return apiClient.post(`/login`, user);
    }
};
