import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5006/api/users",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getUser(id) {
        return apiClient.get(`/find/${id}`);
    },

};
