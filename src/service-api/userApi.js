import axios from "axios";

export const getAllUsers = () => {
    return axios.get(`http://localhost:8078/api/v1/admin/user`);
};

export const createUser = (data) => {
    return axios.post(`http://localhost:8078/api/v1/admin/user`,data);
};

export const findUser = (id) => {
    return axios.get(`http://localhost:8078/api/v1/admin/user/${id}`);
};

export const updateUser = (id,data) => {
    return axios.post(`http://localhost:8078/api/v1/admin/updateUser?id=${id}`,data);
};

export const deleteUser = (id) => {
    return axios.delete(`http://localhost:8078/api/v1/admin/userDelete/${id}`);
};