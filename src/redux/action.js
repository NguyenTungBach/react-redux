import * as types from "./actionType";
import * as userServiceAPI from "../service-api/userApi";

/////////////////
export const getListUsers = (data) => ({
    type: types.GET_USERS,
    payload: data,
});

export const getUsers = () => {
    return async (dispatch) => {
        let res = await userServiceAPI.getAllUsers();
        dispatch(getListUsers(res.data));
    };
};
/////////////////

/////////////////
export const addUser = (data) => ({
    type: types.ADD_USER,
});

export const createUserAction = (data) => {
    return async (dispatch) => {
        let res = await userServiceAPI.createUser(data);
        dispatch(addUser(res.data));
        dispatch(getUsers());
    };
};
/////////////////

/////////////////
export const findUser = (data) => ({
    type: types.FIND_USERS,
    payload: data,
});

export const findUserAction = (id) => {
    return async (dispatch) => {
        let res = await userServiceAPI.findUser(id);
        dispatch(findUser(res.data));
    };
};
/////////////////

/////////////////
export const updateUser = (data) => ({
    type: types.EDIT_USER,
    payload: data,
});

export const updateUserAction = (id,data) => {
    return async (dispatch) => {
        let res = await userServiceAPI.updateUser(id,data);
        dispatch(updateUser(res.data));
        dispatch(getUsers());
    };
};
/////////////////

/////////////////
export const deleteUser = () => ({
    type: types.DELETE_USER,
});

export const deleteUserAction = (id) => {
    return async (dispatch) => {
        await userServiceAPI.deleteUser(id);
        dispatch(deleteUser());
        dispatch(getUsers());
    };
};
/////////////////